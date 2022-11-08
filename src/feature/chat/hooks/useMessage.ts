import { useCallback, useContext, useEffect, useMemo } from 'react'
import useFetch from '../../../hooks/useFetch'
import { IMessageContext } from '../context/message'
import { messageAPI } from '../api'
import { MessageResponse } from '../interface'
import ChatContext from '../context/chat'
import useAppSelector from '../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../store'
import useNumber from '../../../hooks/useNumber'
import useConnect from './useConnect'

const useMessage = (): IMessageContext => {
    const chat = useContext(ChatContext)
    const user = useAppSelector(authorizationSelector)
    const { isConnected, handleJoinRoom, handleLeaveRoom } = useConnect()
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

    useEffect(() => {
        handleJoinRoom()
        return handleLeaveRoom
    }, [handleJoinRoom, handleLeaveRoom])

    useEffect(() => {
        getMany()
    }, [user.data?.id, chat.data?.id, isConnected])

    const ERROR_MESSAGE = 'Something went wrong'
    const { data, previous, isLoading, error, onSuccess, onReject, onPending } = useFetch<MessageResponse.MessageDTO[]>()
    const getMany: IMessageContext['getMany'] = useCallback(() => {
        if (user.data?.id === undefined || chat.data?.id === undefined || !isConnected) {
            return
        }

        reset()
        onPending()
        const getManyHandler = messageAPI.getMany({
            userId: user.data?.id,
            chatId: chat.data?.id,
            page: number - 1
        })
        getManyHandler((messages) => {
            if (messages) {
                onSuccess(messages)
                increment()
            } else {
                onReject(ERROR_MESSAGE)
            }
        })
    }, [onPending, onSuccess, onReject, ERROR_MESSAGE, user.data?.id, chat.data?.id, increment, reset, isConnected])

    const addMany: IMessageContext['addMany'] = useCallback(() => {
        if (user.data?.id === undefined || chat.data?.id === undefined || !isConnected) {
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
    }, [onPending, onSuccess, onReject, data, ERROR_MESSAGE, user.data?.id, chat.data?.id, number, increment, isConnected])

    const create: IMessageContext['create'] = useCallback(({ content }) => {
        if (user.data?.id === undefined || chat.data?.id === undefined || !isConnected) {
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
    }, [onPending, onSuccess, onReject, data, ERROR_MESSAGE, user.data?.id, chat.data?.id, isConnected])

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