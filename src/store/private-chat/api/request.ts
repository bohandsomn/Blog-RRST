namespace PrivateChatRequest {
    export type Create = {
        interlocutorId: string
    }
    export type Update = {
        id: number
        name: string
    }
    export type GetOne = {
        id: string
    }
    export type Delete = {
        id: string
    }
}

export default PrivateChatRequest