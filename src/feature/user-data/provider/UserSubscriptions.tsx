import React from 'react'
import UserSubscriptionsContext from '../context/user-subscriptions'
import useUserSubscriptions from '../hooks/useUserSubscriptions'

const UserSubscriptionsProvider: React.FC<Props> = ({ children }) => {
    const value = useUserSubscriptions()
    return (
        <UserSubscriptionsContext.Provider value={value}>
            {children}
        </UserSubscriptionsContext.Provider>
    )
}

type Props = {
    children?: any
}

export default UserSubscriptionsProvider