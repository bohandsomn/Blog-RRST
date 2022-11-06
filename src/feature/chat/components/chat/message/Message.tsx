import React from 'react'
import { Div } from '@/components/atoms'
import { SecondaryContainer } from '../../../../../layouts/wrapper'
import MessageCreator from './message-creator'
import MessageList from './message-list'
import useAppStyles from '../../../../../hooks/useAppStyles'
import ChatName from './chat-name'

const Message: React.FC = () => {
    const className = useAppStyles('children/height-auto')
    return (
        <Div className={className}>
            <SecondaryContainer>
                <ChatName />
                <MessageList />
                <MessageCreator />
            </SecondaryContainer>
        </Div>
    )
}

export default Message