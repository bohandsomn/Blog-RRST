import { useCallback, useEffect, useMemo } from 'react'
import { IChatListContext } from '../context/chat-list'
import useFetch from '../../../hooks/useFetch'
import { ChatResponse } from '../interface'
import useAppSelector from '../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../store'
import { chatAPI } from '../api'

const useChatList = (): IChatListContext => {
    const { data, previous, isLoading, error, onSuccess, onReject, onPending } = useFetch<ChatResponse.ChatDTO[]>()
    const user = useAppSelector(authorizationSelector)
    useEffect(() => {
        if (user.data?.id === undefined) {
            return
        }
        reset()
    }, [user.data?.id])

    const reset: IChatListContext['reset'] = useCallback(async () => {
        onPending()
        const chats = await chatAPI.getMany()
        if (chats.data !== undefined) {
            onSuccess(chats.data)
        } else {
            onReject(chats.message)
        }
    }, [onPending, onSuccess, onReject])

    return useMemo(() => ({
        data, 
        previous, 
        isLoading, 
        error, 
        onSuccess, 
        onReject, 
        onPending,
        reset
    }), [data, previous, isLoading, error, onSuccess, onReject, onPending, reset])
}

export default useChatList