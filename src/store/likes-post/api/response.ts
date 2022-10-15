import { JsonResponse } from '../../../utility/type'

namespace LikesPostResponse {
    export type LikesPostDTO = {
        id: number
        userId: number
        postId: number
        value: boolean
    }
    
    export type Like = JsonResponse<LikesPostDTO>
    export type Dislike = JsonResponse<LikesPostDTO>
    export type Unlike = JsonResponse<LikesPostDTO>
}

export default LikesPostResponse