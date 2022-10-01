namespace ChatRequest {
    export type Create = {
        name: string
    }
    export type GetMany = void
    export type Update = {
        id: number
        name: string
        privacy: string
    }
    export type GetOne = {
        chatId: string
    }
    export type Delete = {
        chatId: string
    }
    export type GetByUserId = {
        interlocutorId: string
    }
}

export default ChatRequest