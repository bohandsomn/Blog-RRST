import { useContext, useMemo } from 'react'
import useAppSelector from '../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../store'
import UserDataContext from '../context/user-data'
import useGoToPage from 'src/hooks/useGoToPage'

const useChat = () => {
    const user = useContext(UserDataContext)
    const authorization = useAppSelector(authorizationSelector)
    const isMatchUser = user.id === authorization.data?.id

    const { handleGoToChat } = useGoToPage({
        privateChat: {
            interlocutorId: user.id,
            userId: authorization.data?.id
        }
    })

    return useMemo(() => ({
        isMatchUser,
        handleGoToChat
    }), [isMatchUser, handleGoToChat])
}

export default useChat