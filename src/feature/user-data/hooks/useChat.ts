import { useContext, useMemo } from 'react'
import useAppSelector from '../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../store'
import UserDataContext from '../context/user-data'
import useGoToPage from '../../../hooks/useGoToPage'
import { usePrivateChat } from '../../../feature/chat'

const useChat = () => {
    const user = useContext(UserDataContext)
    const authorization = useAppSelector(authorizationSelector)
    const isMatchUser = user.id === authorization.data?.id
    const chat = usePrivateChat({
        interlocutorId: user.id.toString(),
        userId: authorization.data?.id.toString()!
    })

    const { handleGoToChat } = useGoToPage({
        chat: {
            id: chat?.id
        }
    })

    return useMemo(() => ({
        isMatchUser,
        handleGoToChat
    }), [isMatchUser, handleGoToChat])
}

export default useChat