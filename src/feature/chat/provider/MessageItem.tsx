import React from 'react'
import MessageItemContext from '../context/message-item'
import { MessageResponse } from '../interface'

const MessageItemPrivider: React.FC<Props> = ({ children, message }) => {
    return (
        <MessageItemContext.Provider value={message}>
            {children}
        </MessageItemContext.Provider>
    )
}

type Props = {
    children?: any
    message: MessageResponse.MessageDTO
}

export default MessageItemPrivider