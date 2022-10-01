namespace CommentRequest {
    export type Create = {
        content: string
        postId: string
    }
    export type GetMany = {
        postId: string
    }
    export type Update = {
        content: string
        commentId: string
    }
    export type Delete = {
        commentId: string
    }
}

export default CommentRequest