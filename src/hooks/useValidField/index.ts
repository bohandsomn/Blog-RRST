import { useMemo } from 'react'
import useToggle from '../useToggle'

const useValidField = (value: string) => {
    const [isFocused, , handleSetIsFocusedTrue, handleSetIsFocusedFalse] = useToggle(false)
    const isValid: boolean = useMemo(() => {
        if (!isFocused || value !== '') {
            return true
        }
        return value !== ''
    }, [value, isFocused])

    return [
        isValid,
        handleSetIsFocusedTrue,
        handleSetIsFocusedFalse
    ] as const
}

export default useValidField