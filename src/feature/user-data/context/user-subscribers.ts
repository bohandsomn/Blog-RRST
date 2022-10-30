import React from 'react'
import type { State } from 'src/store/interface'
import type { SubscribeResponse } from '../interface'

export type IUserSubscribers = State<SubscribeResponse.SubscribeDTO[]>
const UserSubscribersContext = React.createContext<IUserSubscribers | undefined>(undefined)
export default UserSubscribersContext