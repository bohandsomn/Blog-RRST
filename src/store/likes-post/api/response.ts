import { JsonResponse } from '../../../utility/type'

namespace LikesPostResponse {
    type LikesPost = {
        id: number
        userId: number
        postId: number
        value: boolean
    }
    
    export type Like = JsonResponse<LikesPost>
    export type Dislike = JsonResponse<LikesPost>
    export type Unlike = JsonResponse<LikesPost>
}

export default LikesPostResponse