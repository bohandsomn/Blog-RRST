import type { RequestParams } from '../interface'

class RequestNotifier<
    ApiMethod extends (...args: any[]) => Promise<Response>, 
    Response
> {
    private apiMethod
    private before
    private success
    private reject
    private narrowing

    constructor({
        apiMethod,
        before = null,
        success = null,
        reject = null,
        narrowing = null,
    }: RequestParams<ApiMethod, Response>) {
        this.apiMethod = apiMethod
        this.before = before
        this.success = success
        this.reject = reject
        this.narrowing = narrowing
    }

    async call(...params: Parameters<ApiMethod>): Promise<Response> {
        const id = this.before?.()
        const response = await this.apiMethod(...params)

        if (
            this.narrowing === null || 
            id === undefined
        ) {
            return response
        }

        const isSuccess = this.narrowing(response)
        if (isSuccess) {
            this.success?.({id, response})
        } else {
            this.reject?.({id, response})
        }
        
        return response
    }
}

export default RequestNotifier