import React from 'react'
import UserContext from '../context/user'
import useUser from '../hooks/useUser'
import type { UserDTO } from '../interface'

const UserProvider: React.FC<Props> = ({ children, userId }) => {
    const value = useUser(userId)

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

type Props = {
    userId: UserDTO['id']
    children?: any
}

export default UserProvider