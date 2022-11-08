import React from 'react'
import { UseFetchReturned } from '../../../hooks/useFetch/interface'
import { MessageRequest, MessageResponse } from '../interface'

export type IMessageContext = UseFetchReturned<MessageResponse.MessageDTO[]> & {
    getMany: () => void
    addMany: () => void
    create: (data: Pick<MessageRequest.Create, 'content'>) => void
}
const MessageContext = React.createContext<IMessageContext>(undefined!)

export default MessageContext