import React from 'react'
import type { State } from 'src/store/interface'
import type { SubscribeResponse } from '../interface'

export type IUserSubscriptions = State<SubscribeResponse.SubscribeDTO[]>
const UserSubscriptionsContext = React.createContext<IUserSubscriptions | undefined>(undefined)
export default UserSubscriptionsContext