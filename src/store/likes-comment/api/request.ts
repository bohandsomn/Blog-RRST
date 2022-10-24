namespace LikesCommentRequest {
    export type GetLike = {
        commentId: string
        userId: string
    }
    export type Like = {
        commentId: string
    }
    export type Dislike = {
        commentId: string
    }
    export type Unlike = {
        commentId: string
    }
}

export default LikesCommentRequest