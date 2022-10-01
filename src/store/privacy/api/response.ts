import { JsonResponse } from '../../../utility/type'

namespace PrivacyResponse {
    export type Create = JsonResponse<{
        id: number
        value: string
    }>
    export type GetMany = JsonResponse<{
        id: number
        value: string
    }[]>
}

export default PrivacyResponse