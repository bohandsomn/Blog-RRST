namespace MessageResponse {
    export type MessageDTO = {
        id: number
        userId: number
        chatId: number
        content: string
    }

    export type JoinRoom = void
    export type LeaveRoom = void
    export type Create = MessageDTO | void
    export type GetMany = MessageDTO[] | void
}