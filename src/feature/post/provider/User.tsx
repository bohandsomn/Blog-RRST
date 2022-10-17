import React from 'react'
import UserContext from '../context/user'
import useUser from '../hooks/useUser'
import type { UserDTO } from '../utility/interface'

const UserProvider: React.FC<Props> = ({ children, userId }) => {
    const user = useUser(userId)

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

type Props = {
    userId: UserDTO['id']
    children?: any
}

export default UserProvider