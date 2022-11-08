import React from 'react'
import { Div } from '@/components/atoms'
import { SecondaryContainer } from '../../../../../layouts/wrapper'
import MessageCreator from './message-creator'
import MessageList from './message-list'
import useAppStyles from '../../../../../hooks/useAppStyles'
import ChatName from './chat-name'

const Message: React.FC = () => {
    const classNameMessage = useAppStyles('children/height-auto', 'display-flex', 'align-items-flex-start')
    const classNameList = useAppStyles('children/margin-bottom-10')
    return (
        <Div className={classNameMessage}>
            <SecondaryContainer>
                <Div className={classNameList}>
                    <ChatName />
                    <MessageList />
                    <MessageCreator />
                </Div>
            </SecondaryContainer>
        </Div>
    )
}

export default Message