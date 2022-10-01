import { JsonResponse } from '../../../utility/type'
import SubscribeResponse from '../../subscribe/api/response'

namespace FriendshipsResponse {
    export type Subscribers = JsonResponse<SubscribeResponse.SubscribeDTO[]>
    export type Subscriptions = JsonResponse<SubscribeResponse.SubscribeDTO[]>
}

export default FriendshipsResponse