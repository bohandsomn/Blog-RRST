import React from 'react'
import ChatListContext from '../context/chat-list'
import useChatList from '../hooks/useChatList'

const ChatListProvider: React.FC<Props> = ({ children }) => {
    const value = useChatList()
    return (
        <ChatListContext.Provider value={value}>
            {children}
        </ChatListContext.Provider>
    )
}

type Props = {
    children?: any
}

export default ChatListProvider