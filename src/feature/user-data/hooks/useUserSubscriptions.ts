import { useContext, useEffect, useMemo } from 'react'
import useFetch from 'src/hooks/useFetch'
import { friendshipsNotifier } from '../api'
import UserDataContext from '../context/user-data'
import { IUserSubscriptions } from '../context/user-subscriptions'
import { FriendshipsResponse } from '../interface'

const useUserSubscriptions = (): IUserSubscriptions => {
    const user = useContext(UserDataContext)
    const { data, previous, isLoading, error, onSuccess, onReject, onPending } = useFetch<FriendshipsResponse.FriendshipsDTO[]>()
    useEffect(() => {
        const handleFetchSubscriptions = async () => {
            onPending()
            const userSubscriptionsResponse = await friendshipsNotifier.subscriptions.call({userId: user.id.toString()})
            if (userSubscriptionsResponse.data) {
                onSuccess(userSubscriptionsResponse.data)
            } else {
                onReject(userSubscriptionsResponse.message)
            }
        }
        handleFetchSubscriptions()
    }, [])

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

export default useUserSubscriptions