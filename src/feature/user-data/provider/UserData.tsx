import React from 'react'
import UserDataContext from '../context/user-data'
import { UserResponse } from '../interface'

const UserDataProvider: React.FC<Props> = ({ children, user }) => {
    return (
        <UserDataContext.Provider value={user}>
            {children}
        </UserDataContext.Provider>
    )
}

type Props = {
    children?: any
    user: UserResponse.UserDTO
}

export default UserDataProvider