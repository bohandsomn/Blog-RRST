import React from 'react'
import type { State } from 'src/store/interface'
import type { SubscribeRequest, SubscribeResponse } from '../interface'

export type ISubscribe = State<SubscribeResponse.SubscribeDTO> & {
    subscribe: (data: SubscribeRequest.Subscribe) => void
    unsubscribe: (data: SubscribeRequest.Unsubscribe) => void
}
const SubscribeContext = React.createContext<ISubscribe>(undefined!)
export default SubscribeContext