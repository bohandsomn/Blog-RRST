import { PayloadAction } from '@reduxjs/toolkit'
import { call, fork, put, take } from 'redux-saga/effects'
import { update, updateReject, updateSuccess } from '../slice'
import userNotifier from '../../user/notifier'
import type UserRequest from '../../user/api/request'
import type UserResponse from '../../user/api/response'
import type { ErrorResponse } from '../../../utility/type'

function* updateWorker(payload: UserRequest.Update) {
    try {
        const response: UserResponse.Update | ErrorResponse = yield call(
            userNotifier.update.call.bind(userNotifier.update), 
            payload
        )
        if (response.data === undefined) {
            throw new Error(response.message)
        }

        yield put(updateSuccess(response.data))
    } catch (error) {
        yield put(updateReject((error as Error).message))
    }
}

function* updateWatcher() {
    while (true) {
        const action: PayloadAction<UserRequest.Update> = yield take(update.type)
        yield fork(updateWorker, action.payload)
    }
}

export default updateWatcher