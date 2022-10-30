import React from 'react'
import { UserResponse } from '../interface'

export type IUserDataContext = UserResponse.UserDTO
const UserDataContext = React.createContext<IUserDataContext>(undefined!)

export default UserDataContext