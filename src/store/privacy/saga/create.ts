import { PayloadAction } from '@reduxjs/toolkit'
import { call, fork, put, take } from 'redux-saga/effects'
import { create, createReject, createSuccess } from '../slice'
import privacyNotifier from '../notifier'
import type PrivacyRequest from '../api/request'
import type PrivacyResponse from '../api/response'
import type { ErrorResponse } from 'src/utility/type'

function* createWorker(payload: PrivacyRequest.Create) {
    try {
        const response: PrivacyResponse.Create | ErrorResponse = yield call(
            privacyNotifier.create.call.bind(privacyNotifier.create), 
            payload
        )
        if (response.data === undefined) {
            throw new Error(response.message)
        }

        yield put(createSuccess(response.data))
    } catch (error) {
        yield put(createReject((error as Error).message))
    }
}

function* createWatcher() {
    while (true) {
        const action: PayloadAction<PrivacyRequest.Create> = yield take(create.type)
        yield fork(createWorker, action.payload)
    }
}

export default createWatcher