import { JsonResponse } from '../../../utility/type'

namespace PostResponse {
    type Post = {
        id: number
        title: string
        content: string
        userId: number
        privacyId: number
    }
    
    export type Create = JsonResponse<Post>
    export type GetMany = JsonResponse<Post[]>
    export type Update = JsonResponse<Post>
    export type GetOne = JsonResponse<Post>
    export type Delete = void
}

export default PostResponse