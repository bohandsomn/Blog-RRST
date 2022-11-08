import React from 'react'
import MessageContext from '../context/message'
import useMessage from '../hooks/useMessage'

const MessageProvider: React.FC<Props> = ({ children }) => {
    const value = useMessage()
    return (
        <MessageContext.Provider value={value}>
            {children}
        </MessageContext.Provider>
    )
}

type Props = {
    children?: any
}

export default MessageProvider