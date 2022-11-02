import { JsonResponse } from '../../../utility/type'
import ChatResponse from '../../chat/api/response'

namespace PrivateChatResponse {
    export type Create = JsonResponse<ChatResponse.ChatDTO>
    export type Update = JsonResponse<ChatResponse.ChatDTO>
    export type GetOne = JsonResponse<ChatResponse.ChatDTO>
    export type Delete = void
}

export default PrivateChatResponse