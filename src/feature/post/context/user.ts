import React from 'react'
import { UseFetchReturned } from '../../../hooks/useFetch/interface'
import type { UserDTO } from '../interface'

export type IUserContext = UseFetchReturned<UserDTO>
const UserContext = React.createContext<IUserContext>(undefined!)

export default UserContext