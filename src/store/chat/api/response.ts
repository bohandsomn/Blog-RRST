import { JsonResponse } from '../../../utility/type'

namespace ChatResponse {
    type Chat = {
        id: number
        name: string
        privacyId: number
    }
    
    export type Create = JsonResponse<Chat>
    export type GetMany = JsonResponse<Chat[]>
    export type Update = JsonResponse<Chat>
    export type GetOne = JsonResponse<Chat>
    export type Delete = void
    export type GetByUserId = JsonResponse<Chat>
}

export default ChatResponse