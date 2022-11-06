import { Div } from '@/components/atoms'
import React from 'react'
import { MainContainer, SecondaryBackground } from '../../../../layouts/wrapper'
import ChatPreviewList from '../chat/chat-preview-list'
import Message from '../chat/message'
import useAppQuery from '../../../../hooks/useAppQuery'

const ChatId: React.FC = () => {
    const query = useAppQuery('chat-wrapper')
    return (
        <MainContainer>
            <SecondaryBackground>
                <Div query={query}>
                    <ChatPreviewList />
                    <Message />
                </Div>
            </SecondaryBackground>
        </MainContainer>
    )
}

export default ChatId