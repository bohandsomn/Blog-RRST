import React from 'react'
import ChatPreviewList from '../chat/chat-preview-list'
import ChatWrapper from '../chat/chat-wrapper'
import Message from '../chat/message'
import ChatProvider from '../../provider/Chat'
import MessageProvider from '../../provider/Message'

const ChatId: React.FC = () => {
    return (
        <ChatWrapper>
            <ChatProvider>
                <ChatPreviewList />
                <MessageProvider>
                    <Message />
                </MessageProvider>
            </ChatProvider>
        </ChatWrapper>
    )
}

export default ChatId