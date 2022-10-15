import React from 'react'
import type { UserDTO } from '../utility/interface'

export type IUserContext = UserDTO
const UserContext = React.createContext<IUserContext>(undefined!)

export default UserContext