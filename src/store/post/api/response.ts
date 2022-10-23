import { JsonResponse } from '../../../utility/type'

namespace PostResponse {
    export type PostDTO = {
        id: number
        title: string
        content: string
        userId: number
        privacyId: number
        createdAt: string
        updatedAt: string
    }
    
    export type Create = JsonResponse<PostDTO>
    export type GetMany = JsonResponse<PostDTO[]>
    export type Update = JsonResponse<PostDTO>
    export type GetOne = JsonResponse<PostDTO>
    export type Delete = JsonResponse<number>
}

export default PostResponse