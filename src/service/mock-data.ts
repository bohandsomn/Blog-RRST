import { ErrorResponse, JsonResponse, MockTest } from '../utility/type'

class MockData<SuccessfullRequest, SuccessfullResponse extends JsonResponse<any>> {
    private successfull: MockTest<SuccessfullRequest | null, JsonResponse<SuccessfullResponse | null>> = {
        request: null,
        response: {
            data: null,
            message: 'string'
        }
    }
    private resolvedValue = {
        data: null,
        message: 'string'
    } as SuccessfullResponse
    private erroneously: MockTest<null, ErrorResponse> = {
        request: null,
        response: {
            message: 'string'
        }
    }

    setSuccessfullRequest(successfullRequest: SuccessfullRequest) {
        this.successfull = {
            ...this.successfull,
            request: successfullRequest
        }
        return this
    }

    setSuccessfullResponseData(successfullResponseData: SuccessfullResponse['data']) {
        this.successfull = {
            ...this.successfull,
            response: {
                ...this.successfull.response,
                data: successfullResponseData
            }
        }
        return this
    }

    setResolvedValueData(resolvedValueData: SuccessfullResponse['data']) {
        this.resolvedValue = {
            ...this.resolvedValue,
            data: resolvedValueData
        }
        return this
    }

    setup() {
        const data = {
            successfull: this.successfull,
            erroneously: this.erroneously,
            resolvedValue: this.resolvedValue
        }

        return data as {
            readonly successfull: MockData<SuccessfullRequest, SuccessfullResponse>['successfull'],
            readonly erroneously: MockData<SuccessfullRequest, SuccessfullResponse>['erroneously'],
            readonly resolvedValue: MockData<SuccessfullRequest, SuccessfullResponse>['resolvedValue'],
        }
    }
}

export default MockData