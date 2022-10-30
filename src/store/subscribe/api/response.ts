import { JsonResponse } from '../../../utility/type'

namespace SubscribeResponse {
    export type SubscribeDTO = {
        id: number
        userId: number
        subscriberId: number    
    }
    
    export type Subscribe = JsonResponse<SubscribeDTO[]>
    export type Unsubscribe = JsonResponse<SubscribeDTO[]>
    export type GetSubscribe = JsonResponse<SubscribeDTO>
}

export default SubscribeResponse