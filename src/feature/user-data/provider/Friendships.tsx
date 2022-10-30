import React, { useContext } from 'react'
import FriendshipsContext from '../context/friendships'
import UserSubscribersContext from '../context/user-subscribers'
import UserSubscriptionsContext from '../context/user-subscriptions'

const FriendshipsProvider: React.FC<Props> = ({ children }) => {
    const userSubscribersContext = useContext(UserSubscribersContext)
    const userSubscriptionsContext = useContext(UserSubscriptionsContext)

    return (
        <FriendshipsContext.Provider value={
            userSubscribersContext || 
            userSubscriptionsContext!
        }>
            {children}
        </FriendshipsContext.Provider>
    )
}

type Props = {
    children?: any
}

export default FriendshipsProvider