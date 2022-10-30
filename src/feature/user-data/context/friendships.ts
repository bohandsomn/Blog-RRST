import React from 'react'
import type { State } from 'src/store/interface'
import type { SubscribeResponse } from '../interface'

export type IFriendships = State<SubscribeResponse.SubscribeDTO[]>
const FriendshipsContext = React.createContext<IFriendships>(undefined!)
export default FriendshipsContext