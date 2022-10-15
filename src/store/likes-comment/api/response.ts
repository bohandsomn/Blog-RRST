import { JsonResponse } from '../../../utility/type'

namespace LikesCommentResponse {
    export type LikesCommentDTO = {
        id: number
        userId: number
        commentId: number
        value: boolean
    }
    
    export type Like = JsonResponse<LikesCommentDTO>
    export type Dislike = JsonResponse<LikesCommentDTO>
    export type Unlike = JsonResponse<LikesCommentDTO>
}

export default LikesCommentResponse