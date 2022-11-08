import { NextPage } from 'next'
import React from 'react'
import { Chat, ChatListProvider } from '../../src/feature/chat'
import { AppHead } from '../../src/layouts/head'

const ChatPage: NextPage = () => {
    return (
        <AppHead>
            <ChatListProvider>
                <Chat />
            </ChatListProvider>
        </AppHead>
    )
}

export default ChatPage