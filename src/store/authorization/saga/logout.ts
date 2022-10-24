import { call, fork, put, take } from 'redux-saga/effects'
import { logout, logoutReject, logoutSuccess } from '../slice'
import authorizationNotifier from '../notifier'
import type AuthorizationResponse from '../api/response'
import type { ErrorResponse } from '../../../utility/type'

function* logoutWorker() {
    try {
        const response: AuthorizationResponse.Logout | ErrorResponse = yield call(
            authorizationNotifier.logout.call.bind(authorizationNotifier.logout)
        )
        if (response !== undefined) {
            throw new Error(response.message)
        }
        
        yield put(logoutSuccess())
    } catch (error) {
        yield put(logoutReject((error as Error).message))
    }
}

function* logoutWatcher() {
    while (true) {
        yield take(logout.type)
        yield fork(logoutWorker)
    }
}

export default logoutWatcher