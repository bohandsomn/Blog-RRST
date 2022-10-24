import { PayloadAction } from '@reduxjs/toolkit'
import { call, fork, put, take } from 'redux-saga/effects'
import { login, loginReject, loginSuccess } from '../slice'
import authorizationNotifier from '../notifier'
import type AuthorizationRequest from '../api/request'
import type AuthorizationResponse from '../api/response'
import type { ErrorResponse } from '../../../utility/type'

function* loginWorker(payload: AuthorizationRequest.Login) {
    try {
        const response: AuthorizationResponse.Login | ErrorResponse = yield call(
            authorizationNotifier.login.call.bind(authorizationNotifier.login), 
            payload
        )
        if (response.data === undefined) {
            throw new Error(response.message)
        }

        yield put(loginSuccess(response.data))
    } catch (error) {
        yield put(loginReject((error as Error).message))
    }
}

function* loginWatcher() {
    while (true) {
        const action: PayloadAction<AuthorizationRequest.Registration> = yield take(login.type)
        yield fork(loginWorker, action.payload)
    }
}

export default loginWatcher