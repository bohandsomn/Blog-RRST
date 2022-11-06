import React from 'react'
import { P } from '@/components/atoms'
import { SecondaryContainer } from '../../../../../layouts/wrapper'
import MessageCreator from './message-creator'
import MessageList from './message-list'

const Message: React.FC = () => {
    return (
        <SecondaryContainer>
            <P>Name of chat / user</P>
            <MessageList />
            <MessageCreator />
        </SecondaryContainer>
    )
}

export default Message