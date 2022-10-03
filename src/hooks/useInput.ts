import React, { useCallback, useState } from 'react'

const useInput = (initialState: string, resetValue = initialState) => {
    const [value, setValue] = useState(initialState)
    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback((event) => {
        setValue(event.target.value)
    }, [setValue])
    const handleReset = useCallback(() => {
        setValue(resetValue)
    }, [setValue, resetValue])

    return [value, handleChange, handleReset] as const
}

export default useInput