import { useMemo } from 'react'
import useToggle from '../../../hooks/useToggle'

const useValidPassword = (password: string) => {
    const [isFocused, , handleSetIsFocusedTrue, handleSetIsFocusedFalse] = useToggle(false)
    const isValid: boolean = useMemo(() => {
        if (!isFocused && password === '') {
            return true
        }
        return password !== '' && (password.length >= 4 && password.length < 10)
    }, [password, isFocused])
    
    return [
        isValid,
        handleSetIsFocusedTrue,
        handleSetIsFocusedFalse
    ] as const
}

export default useValidPassword