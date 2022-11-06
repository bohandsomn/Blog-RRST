import React from 'react'
import { Div, P } from '@/components/atoms'
import { SecondaryContainer } from '../../../../../layouts/wrapper'
import MessageCreator from './message-creator'
import MessageList from './message-list'
import useAppStyles from 'src/hooks/useAppStyles'

const Message: React.FC = () => {
    const className = useAppStyles('children/height-auto')
    return (
        <Div className={className}>
            <SecondaryContainer>
                <P>Name of chat / user</P>
                <MessageList />
                <MessageCreator />
            </SecondaryContainer>
        </Div>
    )
}

export default Message