import React, { useCallback, useContext } from 'react'
import { useRouter } from 'next/router'
import { MainButton } from '@/components/atoms'
import useAppSelector from '../../../../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../../../../store'
import UserDataContext from 'src/feature/user-data/context/user-data'
import PATH from 'src/path'
import useChat from '../../../../hooks/useChat'

const Chat: React.FC = () => {
    const { isMatchUser, handleGoToChat } = useChat()
    if (isMatchUser) {
        return <></>
    }

    return (
        <MainButton onClick={handleGoToChat}>
            Chat
        </MainButton>
    )
}

export default Chat