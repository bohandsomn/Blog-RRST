import { call, fork, put, take } from 'redux-saga/effects'
import { getMany, getManyReject, getManySuccess } from '../slice'
import privacyNotifier from '../notifier'
import type PrivacyResponse from '../api/response'
import type { ErrorResponse } from '../../../utility/type'

function* getManyWorker() {
    try {
        const response: PrivacyResponse.GetMany | ErrorResponse = yield call(
            privacyNotifier.getMany.call.bind(privacyNotifier.getMany)
        )
        if (response.data === undefined) {
            throw new Error(response.message)
        }

        yield put(getManySuccess(response.data))
    } catch (error) {
        yield put(getManyReject((error as Error).message))
    }
}

function* getManyWatcher() {
    while (true) {
        yield take(getMany.type)
        yield fork(getManyWorker)
    }
}

export default getManyWatcher