namespace PostRequest {
    export type Create = {
        title: string
        content: string
        privacy: string
    }
    export type GetMany = {
        title: string
        content: string
        privacy: string
        page: string
    }
    export type Update = {
        postId: string
        title: string
        content: string
        privacy: string
    }
    export type GetOne = {
        postId: string
    }
    export type Delete = {
        postId: string
    }
}

export default PostRequest