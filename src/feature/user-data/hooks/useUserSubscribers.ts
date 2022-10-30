import { useContext, useEffect, useMemo } from 'react'
import useFetch from 'src/hooks/useFetch'
import { friendshipsNotifier } from '../api'
import UserDataContext from '../context/user-data'
import { IUserSubscribers } from '../context/user-subscribers'
import { FriendshipsResponse } from '../interface'

const useUserSubscribers = (): IUserSubscribers => {
    const user = useContext(UserDataContext)
    const { data, previous, isLoading, error, onSuccess, onReject, onPending } = useFetch<FriendshipsResponse.FriendshipsDTO[]>()
    useEffect(() => {
        const handleFetchSubscribers = async () => {
            onPending()
            const userSubscribersResponse = await friendshipsNotifier.subscribers.call({userId: user.id.toString()})
            if (userSubscribersResponse.data) {
                onSuccess(userSubscribersResponse.data)
            } else {
                onReject(userSubscribersResponse.message)
            }
        }
        handleFetchSubscribers()
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

export default useUserSubscribers