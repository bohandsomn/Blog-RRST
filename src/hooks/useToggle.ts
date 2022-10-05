import { useCallback, useState } from 'react'

const useToggle = (initialState: boolean) => {
    const [value, setValue] = useState(initialState)
    const handleToggle = useCallback(() => setValue((previous) => !previous), [setValue])
    const handleSetTrue = useCallback(() => setValue(true), [setValue])
    const handleSetFalse = useCallback(() => setValue(false), [setValue])

    return [value, handleToggle, handleSetTrue, handleSetFalse] as const
}

export default useToggle