import { useCallback, useContext, useMemo } from 'react'
import useAppSelector from '../../../hooks/useAppSelector'
import useValidField from '../../../hooks/useValidField'
import { authorizationSelector } from '../../../store'
import useInput from '../../../hooks/useInput'
import { messageAPI } from '../api'
import ChatContext from '../context/chat'

const useCreateMessage = () => {
    const [message, changeMessage, resetMessage] = useInput('')
    const [isValid, handleSetIsFocusedTrue, handleSetIsFocusedFalse] = useValidField(message)
    const user = useAppSelector(authorizationSelector)
    const chat = useContext(ChatContext)
    const handleSubmit = useCallback((event: {preventDefault: () => void}) => {
        event.preventDefault()
        if (
            user.data?.id === undefined ||
            chat.data?.id === undefined
        ) {
            return
        }

        if (!isValid || message === '') {
            return
        }

        const response = messageAPI.create({
            userId: user.data.id,
            chatId: chat.data.id,
            content: message
        })

        resetMessage()
        handleSetIsFocusedFalse()
    }, [isValid, message, resetMessage, handleSetIsFocusedFalse, user.data?.id, chat.data?.id])

    return useMemo(() => ({
        message,
        changeMessage,
        isValid,
        handleSetIsFocusedTrue,
        handleSubmit,
    }), [message, changeMessage, isValid, handleSetIsFocusedTrue, handleSubmit])
}

export default useCreateMessage