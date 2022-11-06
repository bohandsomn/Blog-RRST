import React from 'react'
import { Div } from '@/components/atoms'
import { MainContainer, SecondaryBackground } from '../../../../layouts/wrapper'
import ChatPreviewList from './chat-preview-list'
import useAppQuery from '../../../../hooks/useAppQuery'

const Chat: React.FC = () => {
    const query = useAppQuery('chat-wrapper')
    return (
        <MainContainer>
            <SecondaryBackground>
                <Div query={query}>
                    <ChatPreviewList />
                </Div>
            </SecondaryBackground>
        </MainContainer>
    )
}

export default Chat