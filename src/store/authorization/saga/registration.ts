import { PayloadAction } from '@reduxjs/toolkit'
import { call, fork, put, take } from 'redux-saga/effects'
import { registration, registrationReject, registrationSuccess } from '../slice'
import authorizationNotifier from '../notifier'
import type AuthorizationRequest from '../api/request'
import type AuthorizationResponse from '../api/response'
import type { ErrorResponse } from '../../../utility/type'

function* registrationWorker(payload: AuthorizationRequest.Registration) {
    try {
        const response: AuthorizationResponse.Registration | ErrorResponse = yield call(
            authorizationNotifier.registration.call.bind(authorizationNotifier.registration), 
            payload
        )
        if (response.data === undefined) {
            throw new Error(response.message)
        }

        yield put(registrationSuccess(response.data))
    } catch (error) {
        yield put(registrationReject((error as Error).message))
    }
}

function* registrationWatcher() {
    while (true) {
        const action: PayloadAction<AuthorizationRequest.Registration> = yield take(registration.type)
        yield fork(registrationWorker, action.payload)
    }
}

export default registrationWatcher