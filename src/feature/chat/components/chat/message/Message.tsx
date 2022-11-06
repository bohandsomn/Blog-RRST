import React from 'react'
import { Cancel, Div } from '@/components/atoms'
import { SecondaryContainer } from '../../../../../layouts/wrapper'
import MessageCreator from './message-creator'
import MessageList from './message-list'
import useAppStyles from '../../../../../hooks/useAppStyles'
import ChatName from './chat-name'
import ToggleProvider from '../../../../../provider/toggle'
import useGoToPage from 'src/hooks/useGoToPage'

const Message: React.FC = () => {
    const classNameMessage = useAppStyles('children/height-auto', 'display-flex', 'align-items-flex-start')
    const classNameCancel = useAppStyles('cursor-pointer')
    const classNameList = useAppStyles('children/margin-bottom-10')
    const { handleGoToHomePage } = useGoToPage()
    return (
        <Div className={classNameMessage}>
            <SecondaryContainer>
                <Div className={classNameList}>
                    <ChatName />
                    <MessageList />
                    <MessageCreator />
                </Div>
            </SecondaryContainer>
            <ToggleProvider>
                <Cancel className={classNameCancel} onClick={handleGoToHomePage} />
            </ToggleProvider>
        </Div>
    )
}

export default Message