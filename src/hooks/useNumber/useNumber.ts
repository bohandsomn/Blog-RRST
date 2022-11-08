import { useCallback, useMemo, useState } from 'react'

const useNumber = (initialState: number, step = 1) => {
    const [number, setNumber] = useState(initialState)

    const increment = useCallback(() => {
        setNumber((previous) => previous + step)
    }, [setNumber, step])

    const decrement = useCallback(() => {
        setNumber((previous) => previous - step)
    }, [setNumber, step])

    const reset = useCallback(() => {
        setNumber(initialState)
    }, [setNumber, initialState])

    return useMemo(() => ({
        number,
        increment,
        decrement,
        reset,
    }), [number, increment, decrement, reset])
}

export default useNumber