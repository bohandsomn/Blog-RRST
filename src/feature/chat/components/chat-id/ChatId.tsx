import React from 'react'
import ChatPreviewList from '../chat/chat-preview-list'
import ChatWrapper from '../chat/chat-wrapper'
import Message from '../chat/message'

const ChatId: React.FC = () => {
    return (
        <ChatWrapper>
            <ChatPreviewList />
            <Message />
        </ChatWrapper>
    )
}

export default ChatId