import type { AfterCallback, BeforeCallback, NarrowingCallback } from '../interface'

class Request<Response> {
    beforeCallback: BeforeCallback | null = null
    successCallback: AfterCallback | null = null
    rejectCallback: AfterCallback | null = null
    narrowingCallback: NarrowingCallback<Response> | null = null

    before(callback: BeforeCallback) {
        this.beforeCallback = callback
        return this
    }

    onSuccess(callback: AfterCallback) {
        this.successCallback = callback
        return this
    }

    onReject(callback: AfterCallback) {
        this.rejectCallback = callback
        return this
    }

    narrowing(callback: NarrowingCallback<Response>) {
        this.narrowingCallback = callback
        return this
    }

    async call<ApiMethod extends (...args: any[]) => Promise<Response>>(apiMethod: ApiMethod, ...params: Parameters<ApiMethod>): Promise<Response> {
        this.beforeCallback?.()
        const response = await apiMethod(...params)

        if (this.narrowingCallback === null) {
            return response
        }

        const isSuccess = this.narrowingCallback(response)
        if (isSuccess) {
            this.successCallback?.()
        } else {
            this.rejectCallback?.()
        }
        
        return response
    }
}

export default Request