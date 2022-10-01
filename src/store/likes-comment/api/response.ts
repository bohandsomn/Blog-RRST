import { JsonResponse } from '../../../utility/type'

namespace LikesCommentResponse {
    type LikesComment = {
        id: number
        userId: number
        commentId: number
        value: boolean
    }
    
    export type Like = JsonResponse<LikesComment>
    export type Dislike = JsonResponse<LikesComment>
    export type Unlike = JsonResponse<LikesComment>
}

export default LikesCommentResponse