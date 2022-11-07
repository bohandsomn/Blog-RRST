import React, { useCallback, useContext } from 'react'
import { Ul } from '@/components/atoms'
import useAppStyles from '../../../../../../hooks/useAppStyles'
import { MainBackground } from '../../../../../../layouts/wrapper'
import MessageContext from '../../../../context/message'
import MessageListItem from './message-list-item'
import MessageItemPrivider from 'src/feature/chat/provider/MessageItem'
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