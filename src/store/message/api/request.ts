namespace MessageRequest {
    export type JoinRoom = {
        chatId: number
    }

    export type LeaveRoom = {
        chatId: number
    }

    export type Create = {
        userId: number
        chatId: number
        content: string
    }

    export type GetMany = {
        userId: number
        chatId: number
        page: number
    }
}

export default MessageRequest