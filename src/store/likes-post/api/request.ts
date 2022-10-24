namespace LikesPostRequest {
    export type GetLike = {
        postId: string
        userId: string
    }
    export type Like = {
        postId: string
    }
    export type Dislike = {
        postId: string
    }
    export type Unlike = {
        postId: string
    }
}

export default LikesPostRequest