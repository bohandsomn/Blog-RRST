import { useCallback, useContext, useMemo } from 'react'
import useFetch from '../../../hooks/useFetch'
import { IMessageContext } from '../context/message'
import { messageAPI } from '../api'
import { MessageResponse } from '../interface'
import ChatContext from '../context/chat'
import useAppSelector from '../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../store'
import useNumber from '../../../hooks/useNumber'

const useMessage = (): IMessageContext => {
    const chat = useContext(ChatContext)
    const user = useAppSelector(authorizationSelector)
    const { number, increment, reset } = useNumber(1)

    const distinguish = (
        state: MessageResponse.MessageDTO[], 
        received: MessageResponse.MessageDTO[]
    ): MessageResponse.MessageDTO[] => {
        const store: Record<string, MessageResponse.MessageDTO> = { }
        state.forEach((message) => {
            store[message.id] = message
        })
        received.forEach((message) => {
            store[message.id] = message
        })
        return Object.values(store)
    }

    const ERROR_MESSAGE = 'Something went wrong'
    const { data, previous, isLoading, error, onSuccess, onReject, onPending } = useFetch<MessageResponse.MessageDTO[]>()
    const getMany: IMessageContext['getMany'] = useCallback(() => {
        if (user.data?.id === undefined || chat.data?.id === undefined) {
            return
        }

        reset()
        onPending()
        const getManyHandler = messageAPI.getMany({
            userId: user.data?.id,
            chatId: chat.data?.id,
            page: 1
        })
        getManyHandler((messages) => {
            if (messages) {
                onSuccess(messages)
                increment()
            } else {
                onReject(ERROR_MESSAGE)
            }
        })
    }, [onPending, onSuccess, onReject, ERROR_MESSAGE, user.data?.id, chat.data?.id, increment, reset])

    const addMany: IMessageContext['addMany'] = useCallback(() => {
        if (user.data?.id === undefined || chat.data?.id === undefined) {
            return
        }

        onPending()
        const addManyHandler = messageAPI.getMany({
            userId: user.data?.id,
            chatId: chat.data?.id,
            page: number
        })
        addManyHandler((messages) => {
            if (messages) {
                onSuccess(distinguish(data || [], messages))
                increment()
            } else {
                onReject(ERROR_MESSAGE)
            }
        })
    }, [onPending, onSuccess, onReject, data, ERROR_MESSAGE, user.data?.id, chat.data?.id, number, increment])

    const create: IMessageContext['create'] = useCallback(({ content }) => {
        if (user.data?.id === undefined || chat.data?.id === undefined) {
            return
        }

        onPending()
        const createHandler = messageAPI.create({
            userId: user.data?.id,
            chatId: chat.data?.id,
            content
        })
        createHandler((message) => {
            if (message) {
                onSuccess(distinguish(data || [], [message]))
            } else {
                onReject(ERROR_MESSAGE)
            }
        })
    }, [onPending, onSuccess, onReject, data, ERROR_MESSAGE, user.data?.id, chat.data?.id])

    return useMemo(() => ({
        data, 
        previous, 
        isLoading, 
        error, 
        onSuccess, 
        onReject, 
        onPending,
        getMany,
        addMany,
        create
    }), [data, previous, isLoading, error, onSuccess, onReject, onPending, getMany, addMany, create])
}

export default useMessage