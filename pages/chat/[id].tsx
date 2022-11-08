import { NextPage } from 'next'
import React from 'react'
import { ChatId, ChatListProvider } from '../../src/feature/chat'
import { AppHead } from '../../src/layouts/head'

const ChatIdPage: NextPage = () => {
    return (
        <AppHead>
            <ChatListProvider>
                <ChatId />
            </ChatListProvider>
        </AppHead>
    )
}

export default ChatIdPage