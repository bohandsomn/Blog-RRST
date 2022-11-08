import React from 'react'
import ChatPreviewList from './chat-preview-list'
import ChatWrapper from './chat-wrapper'

const Chat: React.FC = () => {
    return (
        <ChatWrapper>
            <ChatPreviewList />
        </ChatWrapper>
    )
}

export default Chat