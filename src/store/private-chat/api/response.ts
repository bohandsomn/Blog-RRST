import { JsonResponse } from '../../../utility/type'
import ChatResponse from '../../chat/api/response'

namespace PrivateChatResponse {
    export type Create = JsonResponse<ChatResponse.Chat>
    export type Update = JsonResponse<ChatResponse.Chat>
    export type GetOne = JsonResponse<ChatResponse.Chat>
    export type Delete = void
}

export default PrivateChatResponse