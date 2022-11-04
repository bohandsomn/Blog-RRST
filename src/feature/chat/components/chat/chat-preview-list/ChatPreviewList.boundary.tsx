import React, { useCallback, useContext } from 'react'
import ErrorBoundary from '@/components/error-boundary'
import ChatListContext from '../../../context/chat-list'

const ChatPreviewListBoundary: React.FC<Props> = ({ children }) => {
    const chatListContext = useContext(ChatListContext)
    const onReload = useCallback(() => chatListContext.reset(), [chatListContext.reset])
    const onCancel = useCallback(() => {
        return chatListContext.onSuccess(chatListContext.previous || [])
    }, [chatListContext.onSuccess, chatListContext.previous])

    if (chatListContext.data === null && !chatListContext.isLoading) {
        return (
            <ErrorBoundary 
                error={chatListContext.error!}
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

export default ChatPreviewListBoundary