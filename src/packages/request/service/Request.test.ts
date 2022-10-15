import { AfterCallback, BeforeCallback, NarrowingCallback } from '../interface'
import Request from './Request'

const api = {
    method: async () => {
        return {
            data: [''],
            message: ''
        }
    }
}

describe('Request', () => {
    type Response = {data: string[], message: string}
    let request: Request<Response>
    let beforeCallback: BeforeCallback
    let onSuccessCallback: AfterCallback
    let onRejectCallback: AfterCallback
    let narrowingCallback: NarrowingCallback<Response>

    beforeEach(() => {
        request = new Request()
        beforeCallback = () => console.log('beforeCallback')
        onSuccessCallback = () => console.log('onSuccess')
        onRejectCallback = () => console.log('onReject')
        narrowingCallback = (response) => Array.isArray(response.data)

        jest.spyOn(api, 'method')
    })

    test('should return response', async () => {
        const response = await request.call(api.method)
        expect(response).toEqual({
            data: [''],
            message: ''
        })
    })

    test('should before callback call once', async () => {
        const beforeCallback = jest.fn()

        await request
            .before(beforeCallback)
            .narrowing(narrowingCallback)
            .onSuccess(onSuccessCallback)
            .onReject(onRejectCallback)
            .call(api.method)

        expect(beforeCallback).toBeCalledTimes(1)
    })

    test('should success callback call once', async () => {
        const onSuccessCallback = jest.fn()

        await request
            .before(beforeCallback)
            .narrowing(narrowingCallback)
            .onSuccess(onSuccessCallback)
            .onReject(onRejectCallback)
            .call(api.method)

        expect(onSuccessCallback).toBeCalledTimes(1)
    })

    test('should reject callback call once', async () => {
        const onRejectCallback = jest.fn()

        await request
            .before(beforeCallback)
            .narrowing(narrowingCallback)
            .onSuccess(onSuccessCallback)
            .onReject(onRejectCallback)
            .call(api.method)

        expect(onRejectCallback).not.toBeCalled()
    })
})