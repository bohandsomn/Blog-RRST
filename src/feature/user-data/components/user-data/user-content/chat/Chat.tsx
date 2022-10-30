import React from 'react'
import { MainButton } from '@/components/atoms'
import useChat from '../../../../hooks/useChat'
import { useTranslation } from '../../../../../internationalization'

const Chat: React.FC = () => {
    const {translation} = useTranslation()
    const { isMatchUser, handleGoToChat } = useChat()
    if (isMatchUser) {
        return <></>
    }

    return (
        <MainButton onClick={handleGoToChat}>
            {translation.feature['user-data']['user-content'].chat}
        </MainButton>
    )
}

export default Chat