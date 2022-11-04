import React from 'react'
import ChatPreviewList from '../chat/chat-preview-list'
import Message from '../chat/message'

const ChatId: React.FC = () => {
    return (
        <div>
            <ChatPreviewList />
            <Message />
        </div>
    )
}

export default ChatId