import { useEffect, useMemo } from 'react'
import { IChatContext } from '../context/chat'
import useFetch from '../../../hooks/useFetch'
import { ChatResponse } from '../interface'
import useAppSelector from '../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../store'
import { chatAPI } from '../api'
import { useRouter } from 'next/router'

const useChat = (): IChatContext => {
    const { data, previous, isLoading, error, onSuccess, onReject, onPending } = useFetch<ChatResponse.ChatDTO>()
    const user = useAppSelector(authorizationSelector)
    const chatId = useRouter().query.id
    useEffect(() => {
        const handleFetch = async () => {
            if (user.data?.id === undefined) {
                return
            }
            if (chatId === undefined || Array.isArray(chatId)) {
                return
            }
            onPending()
            const chat = await chatAPI.getOne({chatId})
            if (chat.data) {
                onSuccess(chat.data)
            } else {
                onReject(chat.message)
            }
        }
        handleFetch()
    }, [user.data?.id, chatId])

    return useMemo(() => ({
        data, 
        previous, 
        isLoading, 
        error, 
        onSuccess, 
        onReject, 
        onPending
    }), [data, previous, isLoading, error, onSuccess, onReject, onPending])
}

export default useChat