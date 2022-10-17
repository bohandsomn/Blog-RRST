import { JsonResponse } from '../../../utility/type'

namespace CommentResponse {
    export type CommentDTO = {
        id: number
        userId: number
        postId: number
        content: string
    }
    
    export type Create = JsonResponse<CommentDTO>
    export type GetMany = JsonResponse<CommentDTO[]>
    export type Update = JsonResponse<CommentDTO>
    export type Delete = void
}

export default CommentResponse