import React from 'react'
import { MessageResponse } from '../interface'

export type IMessageItemContext = MessageResponse.MessageDTO
const MessageItemContext = React.createContext<IMessageItemContext | undefined>(undefined)

export default MessageItemContext