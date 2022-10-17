import { useCallback, useState } from 'react'

const useLukasiewicz = (initialState: boolean | null) => {
    const [value, setValue] = useState(initialState)
    const handleSetTrue = useCallback(() => setValue(true), [setValue])
    const handleSetFalse = useCallback(() => setValue(false), [setValue])
    const handleSetNull = useCallback(() => setValue(null), [setValue])

    return {
        value,
        handleSetTrue,
        handleSetFalse,
        handleSetNull
    }
}

export default useLukasiewicz