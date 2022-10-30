import React from 'react'
import UserSubscribersContext from '../context/user-subscribers'
import useUserSubscribers from '../hooks/useUserSubscribers'

const UserSubscribersProvider: React.FC<Props> = ({ children }) => {
    const value = useUserSubscribers()
    return (
        <UserSubscribersContext.Provider value={value}>
            {children}
        </UserSubscribersContext.Provider>
    )
}

type Props = {
    children?: any
}

export default UserSubscribersProvider