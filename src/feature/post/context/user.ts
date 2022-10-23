import React from 'react'
import { UseFetchReturned } from 'src/hooks/useFetch/interface'
import type { UserDTO } from '../utility/interface'

export type IUserContext = UseFetchReturned<UserDTO>
const UserContext = React.createContext<IUserContext>(undefined!)

export default UserContext