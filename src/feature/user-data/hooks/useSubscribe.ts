import { useCallback, useContext, useEffect, useMemo } from 'react'
import { subscribeNotifier } from '../api'
import useFetch from '../../../hooks/useFetch'
import UserDataContext from '../context/user-data'
import type { ISubscribe } from '../context/subscribe'
import type { SubscribeResponse } from '../interface'

const useSubscribe = (): ISubscribe => {
    const user = useContext(UserDataContext)
    const { data, previous, isLoading, error, onSuccess, onReject, onPending } = useFetch<SubscribeResponse.SubscribeDTO | null>()
    useEffect(() => {
        const handleGetSubscribe = async () => {
            onPending()
            const subscribeResponse = await subscribeNotifier.getSubscribe.call({
                subscriberId: user.id.toString()
            })
            if (subscribeResponse.data !== undefined) {
                onSuccess(subscribeResponse.data)
            } else {
                onReject(subscribeResponse.message)
            }
        }
        handleGetSubscribe()
    }, [])
    
    const subscribe: ISubscribe['subscribe'] = useCallback(async () => {
        onPending()
        const subscribeResponse = await subscribeNotifier.subscribe.call({ subscriberId: user.id.toString() })
        if (subscribeResponse.data !== undefined) {
            onSuccess(subscribeResponse.data)
        } else {
            onReject(subscribeResponse.message)
        }
    }, [onPending, onSuccess, onReject])

    const unsubscribe: ISubscribe['unsubscribe'] = useCallback(async () => {
        onPending()
        const subscribeResponse = await subscribeNotifier.unsubscribe.call({ subscriberId: user.id.toString() })
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