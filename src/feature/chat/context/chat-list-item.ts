import React from 'react'
import { ChatResponse } from '../interface'

export type IChatListItemContext = ChatResponse.ChatDTO
const ChatListItemContext = React.createContext<IChatListItemContext>(undefined!)

export default ChatListItemContext