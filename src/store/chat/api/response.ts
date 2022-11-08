import { JsonResponse } from '../../../utility/type'

namespace ChatResponse {
    export type ChatDTO = {
        id: number
        name: string
        privacyId: number
    }
    
    export type Create = JsonResponse<ChatDTO>
    export type GetMany = JsonResponse<ChatDTO[]>
    export type Update = JsonResponse<ChatDTO>
    export type GetOne = JsonResponse<ChatDTO>
    export type Delete = void
    export type GetByUserId = JsonResponse<ChatDTO>
}

export default ChatResponse