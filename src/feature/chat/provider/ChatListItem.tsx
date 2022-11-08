import React from 'react'
import ChatListItemContext from '../context/chat-list-item'
import { ChatResponse } from '../interface'

const ChatListItemProvider: React.FC<Props> = ({ children, chat }) => {
    return (
        <ChatListItemContext.Provider value={chat}>
            {children}
        </ChatListItemContext.Provider>
    )
}

type Props = {
    children?: any
    chat: ChatResponse.ChatDTO
}

export default ChatListItemProvider