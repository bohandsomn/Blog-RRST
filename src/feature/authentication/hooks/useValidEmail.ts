import { useMemo } from 'react'
import useToggle from '../../../hooks/useToggle'

const useValidEmail = (email: string) => {
    const [isFocused, , handleSetIsFocusedTrue, handleSetIsFocusedFalse] = useToggle(false)
    const isValid: boolean = useMemo(() => {
        if (!isFocused && email === '') {
            return true
        }
        return email !== '' && email === email.toLowerCase() && email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/) !== null
    }, [email, isFocused])
    
    return [
        isValid,
        handleSetIsFocusedTrue,
        handleSetIsFocusedFalse
    ] as const
}

export default useValidEmail