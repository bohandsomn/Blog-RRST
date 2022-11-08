import React from 'react'
import { UseFetchReturned } from '../../../hooks/useFetch/interface'
import { ChatResponse } from '../interface'

export type IChatListContext = UseFetchReturned<ChatResponse.ChatDTO[]> & {
    reset: () => void
}
const ChatListContext = React.createContext<IChatListContext>(undefined!)

export default ChatListContext