import { useCallback, useMemo } from 'react'
import { subscribeNotifier } from '../api'
import useFetch, { State } from '../../../hooks/useFetch'
import type { ErrorResponse } from '../../../utility/type'
import type { ISubscribe } from '../context/subscribe'
import type { SubscribeResponse } from '../interface'

const useSubscribe = (serverSubscribe: ErrorResponse | SubscribeResponse.GetSubscribe): ISubscribe => {
    const initialSubscribe: State<SubscribeResponse.SubscribeDTO> = useMemo(() => ({
        data: serverSubscribe.data || null,
        isLoading: false,
        error: serverSubscribe.data === undefined ? serverSubscribe.message : null
    }), [serverSubscribe])
    const { data, previous, isLoading, error, onSuccess, onReject, onPending } = useFetch<SubscribeResponse.SubscribeDTO | null>(initialSubscribe)

    const subscribe: ISubscribe['subscribe'] = useCallback(async (dataSubscribe) => {
        onPending()
        const subscribeResponse = await subscribeNotifier.subscribe.call(dataSubscribe)
        if (subscribeResponse.data !== undefined) {
            onSuccess(subscribeResponse.data)
        } else {
            onReject(subscribeResponse.message)
        }
    }, [onPending, onSuccess, onReject])

    const unsubscribe: ISubscribe['unsubscribe'] = useCallback(async (dataUnsubscribe) => {
        onPending()
        const subscribeResponse = await subscribeNotifier.unsubscribe.call(dataUnsubscribe)
        if (subscribeResponse.data !== undefined) {
            onSuccess(null)
        } else {
            onReject(subscribeResponse.message)
        }
    }, [onPending, onSuccess, onReject])

    return useMemo(() => ({
        data, 
        previous, 
        isLoading, 
        error, 
        onSuccess, 
        onReject, 
        onPending,
        subscribe,
        unsubscribe
    }), [data, previous, isLoading, error, onSuccess, onReject, onPending, subscribe, unsubscribe])
}

export default useSubscribe