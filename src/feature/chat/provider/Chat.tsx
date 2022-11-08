import React from 'react'
import ChatContext from '../context/chat'
import useChat from '../hooks/useChat'

const ChatProvider: React.FC<Props> = ({ children }) => {
    const value = useChat()
    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    )
}

type Props = {
    children?: any
}

export default ChatProvider