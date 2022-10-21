import { useCallback, useMemo, useState } from 'react'
import useToggle from '../useToggle'
import type { UseFetchReturned } from './interface'

const useFetch = <Data>(initialState: Data | null = null): UseFetchReturned<Data> => {
    const [data, setData] = useState<Data | null>(initialState)
    const [previous, setPrevious] = useState<Data | null>(null)
    const [isLoading, , handleSetTrue, handleSetFalse] = useToggle(false)
    const [error, setError] = useState<string | null>(null)

    const onSuccess = useCallback((data: Data) => {
        setData((previous) => {
            setPrevious(previous)
            return data
        })
        handleSetFalse()
        setError(null)
    }, [setData, setPrevious, handleSetFalse, setError])

    const onReject = useCallback((error: string) => {
        setData((previous) => {
            previous !== null && setPrevious(previous)
            return null
        })
        handleSetFalse()
        setError(error)
    }, [setData, setPrevious, handleSetTrue, setError])

    const onPending = useCallback(() => {
        handleSetTrue()
    }, [handleSetTrue])

    return useMemo(() => ({
        data,
        previous,
        isLoading,
        error,
        onSuccess,
        onReject,
        onPending
    }), [data, previous, isLoading, error, onSuccess, onReject, onPending])
}

export default useFetch