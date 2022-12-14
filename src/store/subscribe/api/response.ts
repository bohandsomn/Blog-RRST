import { JsonResponse } from '../../../utility/type'

namespace SubscribeResponse {
    export type SubscribeDTO = {
        id: number
        userId: number
        subscriberId: number    
    }
    
    export type Subscribe = JsonResponse<SubscribeDTO>
    export type Unsubscribe = JsonResponse<number>
    export type GetSubscribe = JsonResponse<SubscribeDTO>
}

export default SubscribeResponse