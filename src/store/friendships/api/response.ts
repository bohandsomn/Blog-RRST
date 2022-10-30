import { JsonResponse } from '../../../utility/type'
import SubscribeResponse from '../../subscribe/api/response'

namespace FriendshipsResponse {
    export type FriendshipsDTO = SubscribeResponse.SubscribeDTO

    export type Subscribers = JsonResponse<FriendshipsDTO[]>
    export type Subscriptions = JsonResponse<FriendshipsDTO[]>
}

export default FriendshipsResponse