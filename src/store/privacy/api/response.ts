import { JsonResponse } from '../../../utility/type'

namespace PrivacyResponse {
    export type PrivacyDTO = {
        id: number
        value: string
    }

    export type Create = JsonResponse<PrivacyDTO>
    export type GetMany = JsonResponse<PrivacyDTO[]>
}

export default PrivacyResponse