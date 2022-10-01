import { JsonResponse } from '../../../utility/type'

namespace CommentResponse {
    type Comment = {
        id: number
        userId: number
        postId: number
        content: string
    }
    
    export type Create = JsonResponse<Comment>
    export type GetMany = JsonResponse<Comment[]>
    export type Update = JsonResponse<Comment>
    export type Delete = void
}

export default CommentResponse