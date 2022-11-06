import React from 'react'
import ChatPreviewList from '../chat/chat-preview-list'
import ChatWrapper from '../chat/chat-wrapper'
import Message from '../chat/message'
import ChatProvider from '../../provider/Chat'

const ChatId: React.FC = () => {
    return (
        <ChatWrapper>
            <ChatProvider>
                <ChatPreviewList />
                <Message />
            </ChatProvider>
        </ChatWrapper>
    )
}

export default ChatId