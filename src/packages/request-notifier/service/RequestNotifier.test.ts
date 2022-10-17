import { AfterCallback, BeforeCallback, NarrowingCallback } from '../interface'
import RequestNotifier from './RequestNotifier'

const api = {
    successfull: async () => {
        return {
            data: [''],
            message: ''
        }
    },
    rejected: async () => {
        return {
            data: null,
            message: ''
        }
    }
}

describe('RequestNotifier', () => {
    type SuccessfullResponse = {data: string[], message: string}
    type RejectedResponse = {data: null, message: string}
    let beforeCallback: BeforeCallback
    let onSuccessCallback: AfterCallback<SuccessfullResponse | RejectedResponse>
    let onRejectCallback: AfterCallback<SuccessfullResponse | RejectedResponse>
    let narrowingCallback: NarrowingCallback<SuccessfullResponse | RejectedResponse>

    beforeEach(() => {
        beforeCallback = () => 'UNIQUE_ID'
        onSuccessCallback = ({id, response}) => console.log({id, message: response.message})
        onRejectCallback = ({id, response}) => console.log({id, message: response.message})
        narrowingCallback = (response) => Array.isArray(response.data)

        jest.spyOn(api, 'successfull')
        jest.spyOn(api, 'rejected')
    })

    test('should return response', async () => {
        const response = await new RequestNotifier({
            apiMethod: api.successfull,
            before: beforeCallback,
            narrowing: narrowingCallback,
            success: onSuccessCallback,
            reject: onRejectCallback,
        }).call()

        expect(response).toEqual({
            data: [''],
            message: ''
        })
    })

    test('should before callback call once', async () => {
        const beforeCallback = jest.fn()

        await new RequestNotifier({
            apiMethod: api.successfull,
            before: beforeCallback,
            narrowing: narrowingCallback,
            success: onSuccessCallback,
            reject: onRejectCallback,
        }).call()

        expect(beforeCallback).toBeCalledTimes(1)
    })

    test('should success callback call once', async () => {
        const onSuccessCallback = jest.fn()

        await new RequestNotifier({
            apiMethod: api.successfull,
            before: beforeCallback,
            narrowing: narrowingCallback,
            success: onSuccessCallback,
            reject: onRejectCallback,
        }).call()

        expect(onSuccessCallback).toBeCalledTimes(1)
    })

    test('should reject callback call once', async () => {
        const onRejectCallback = jest.fn()

        await new RequestNotifier({
            apiMethod: api.rejected,
            before: beforeCallback,
            narrowing: narrowingCallback,
            success: onSuccessCallback,
            reject: onRejectCallback,
        }).call()

        expect(onRejectCallback).toBeCalledTimes(1)
    })
})