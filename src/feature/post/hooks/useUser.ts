import { useEffect, useMemo } from 'react'
import useFetch from '../../../hooks/useFetch'
import { userNotifier } from '../api'
import type { IUserContext } from '../context/user'
import type { UserDTO } from '../utility/interface'

const useUser = (userId: UserDTO['id']): IUserContext => {
    const { data, previous, isLoading, error, onSuccess, onReject, onPending } = useFetch<UserDTO>()
    useEffect(() => {
        const handleFetch = async () => {
            onPending()
            const response = await userNotifier.getOne.call({userId: userId.toString()})
            if (response.data) {
                onSuccess(response.data)
            } else {
                onReject(response.message)
            }
        }
        handleFetch()
    }, [])

    return useMemo(() => ({
        data, 
        previous, 
        isLoading, 
        error, 
        onSuccess, 
        onReject, 
        onPending,
    }), [data, previous, isLoading, error, onSuccess, onReject, onPending])
}

export default useUser