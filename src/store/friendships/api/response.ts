import { JsonResponse } from '../../../utility/type'

namespace FriendshipsResponse {
    type SubscribeDTO = {
        id: number
        userId: number
        subscriberId: number    
    }
    
    export type Subscribers = JsonResponse<SubscribeDTO[]>
    export type Subscriptions = JsonResponse<SubscribeDTO[]>
}

export default FriendshipsResponse