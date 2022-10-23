import { useCallback, useMemo, useState } from 'react'
import useToggle from '../useToggle'
import type { State, UseFetchReturned } from './interface'

const useFetch = <Data>(initialState?: Partial<State<Data>>): UseFetchReturned<Data> => {
    const [data, setData] = useState<Data | null>(initialState?.data || null)
    const [previous, setPrevious] = useState<Data | null>(null)
    const [isLoading, , handleSetTrue, handleSetFalse] = useToggle(initialState?.isLoading || true)
    const [error, setError] = useState<string | null>(initialState?.error || null)

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