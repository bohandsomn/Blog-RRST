import { useMemo } from 'react'
import useToggle from '../../../hooks/useToggle'

const useValidLogin = (login: string) => {
    const [isFocused, , handleSetIsFocusedTrue, handleSetIsFocusedFalse] = useToggle(false)
    const isValid: boolean = useMemo(() => {
        if (!isFocused && login === '') {
            return true
        }
        return login !== '' && login === login.toLowerCase()
    }, [login, isFocused])
    
    return [
        isValid,
        handleSetIsFocusedTrue,
        handleSetIsFocusedFalse
    ] as const
}

export default useValidLogin