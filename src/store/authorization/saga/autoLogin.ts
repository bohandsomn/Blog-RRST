import { call, fork, put, take } from 'redux-saga/effects'
import { autoLogin, autoLoginReject, autoLoginSuccess } from '../slice'
import authorizationNotifier from '../notifier'
import type AuthorizationResponse from '../api/response'
import type { ErrorResponse } from '../../../utility/type'

function* autoLoginWorker() {
    try {
        const response: AuthorizationResponse.AutoLogin | ErrorResponse = yield call(
            authorizationNotifier.autoLogin.call.bind(authorizationNotifier.autoLogin)
        )
        if (response.data === undefined) {
            throw new Error(response.message)
        }

        yield put(autoLoginSuccess(response.data))
    } catch (error) {
        yield put(autoLoginReject((error as Error).message))
    }
}

function* autoLoginWatcher() {
    while (true) {
        yield take(autoLogin.type)
        yield fork(autoLoginWorker)
    }
}

export default autoLoginWatcher