import React from 'react'
import { UseFetchReturned } from '../../../hooks/useFetch/interface'
import { ChatResponse } from '../interface'

export type IChatContext = UseFetchReturned<ChatResponse.ChatDTO>
const ChatContext = React.createContext<IChatContext>(undefined!)

export default ChatContext