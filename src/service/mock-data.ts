import { ErrorResponse, JsonResponse, MockTest } from '../utility/type'

class MockData<SuccessfullRequest, SuccessfullResponseData> {
    private successfull: MockTest<SuccessfullRequest | null, JsonResponse<SuccessfullResponseData | null>> = {
        request: null,
        response: {
            data: null,
            message: 'string'
        }
    }
    private resolvedValue = {
        data: null as SuccessfullResponseData,
        message: 'string'
    }
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

    setSuccessfullResponseData(successfullResponseData: SuccessfullResponseData) {
        this.successfull = {
            ...this.successfull,
            response: {
                ...this.successfull.response,
                data: successfullResponseData
            }
        }
        return this
    }

    setResolvedValueData(resolvedValueData: SuccessfullResponseData) {
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
            readonly successfull: MockData<SuccessfullRequest, SuccessfullResponseData>['successfull'],
            readonly erroneously: MockData<SuccessfullRequest, SuccessfullResponseData>['erroneously'],
            readonly resolvedValue: MockData<SuccessfullRequest, SuccessfullResponseData>['resolvedValue'],
        }
    }
}

export default MockData