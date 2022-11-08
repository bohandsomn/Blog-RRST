import React, { useCallback, useContext } from 'react'
import MessageContext from '../../../../context/message'
import ErrorBoundary from '@/components/error-boundary'

const MessageListBoundary: React.FC<Props> = ({ children }) => {
    const messageContext = useContext(MessageContext)
    const onReload = useCallback(() => {
        messageContext.getMany()
    }, [messageContext.getMany])
    const onCancel = useCallback(() => {
        messageContext.onSuccess(messageContext.previous || [])
    }, [messageContext.onSuccess, messageContext.previous])

    if (messageContext.data === null && !messageContext.isLoading) {
        return (
            <ErrorBoundary 
                error={messageContext.error!}
                onReload={onReload}
                onCancel={onCancel}
            />
        )
    }

    return (
        children
    )
}

type Props = {
    children?: any
}

export default MessageListBoundary