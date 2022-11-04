import { useEffect } from 'react'
import useAppSelector from '../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../store'
import useFetch from '../../../hooks/useFetch'
import { ChatResponse, PrivateChatRequest } from '../interface'
import { privateChatAPI } from '../api'

const usePrivateChat = ({ interlocutorId, userId }: PrivateChatRequest.GetOne) => {
    const { data, onSuccess, onReject, onPending } = useFetch<ChatResponse.ChatDTO | null>()
    const user = useAppSelector(authorizationSelector)

    useEffect(() => {
        if (user.data?.id === undefined || userId === undefined) {
            return
        }
        const handleFetch = async () => {
            onPending()
            const chat = await privateChatAPI.getOne({ interlocutorId, userId })
            if (chat.data !== undefined) {
                onSuccess(chat.data)
            } else {
                onReject(chat.message)
            }
        }
        handleFetch()
    }, [user.data?.id, userId])

    return data
}

export default usePrivateChat