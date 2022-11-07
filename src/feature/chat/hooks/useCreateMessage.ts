import { useCallback, useMemo } from 'react'
import useValidField from '../../../hooks/useValidField'
import useInput from '../../../hooks/useInput'
import useMessage from './useMessage'

const useCreateMessage = () => {
    const [message, changeMessage, resetMessage] = useInput('')
    const [isValid, handleSetIsFocusedTrue, handleSetIsFocusedFalse] = useValidField(message)
    const { create } = useMessage()
    const handleSubmit = useCallback((event: {preventDefault: () => void}) => {
        event.preventDefault()
        if (!isValid || message === '') {
            return
        }

        create({content: message})

        resetMessage()
        handleSetIsFocusedFalse()
    }, [isValid, message, create, resetMessage, handleSetIsFocusedFalse])

    return useMemo(() => ({
        message,
        changeMessage,
        isValid,
        handleSetIsFocusedTrue,
        handleSubmit,
    }), [message, changeMessage, isValid, handleSetIsFocusedTrue, handleSubmit])
}

export default useCreateMessage