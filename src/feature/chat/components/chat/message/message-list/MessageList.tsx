import React, { useContext, useEffect, useRef } from 'react'
import { Ul } from '@/components/atoms'
import useAppStyles from '../../../../../../hooks/useAppStyles'
import { MainBackground } from '../../../../../../layouts/wrapper'
import MessageContext from '../../../../../chat/context/message'
import MessageListItem from './message-list-item'
import MessageItemPrivider from '../../../../provider/MessageItem'
import MessageListBoundary from './MessageList.boundary'
import { UserProvider } from '../../../../../post'

const MessageList: React.FC = () => {
    const className = useAppStyles('height-583', 'overflow-y-scroll', 'children/margin-bottom-10')
    const messageContext = useContext(MessageContext)
    const ref = useRef<HTMLUListElement>(null)
    useEffect(() => {
        const listener = (event: Event) => {
            const isTop = (event.target as any)?.scrollTop === 0
            if (!isTop) {
                return
            }
            messageContext.addMany()
        }
        ref.current?.addEventListener('scroll', listener)
        return () => {
            ref.current?.removeEventListener('scroll', listener)
        }
    }, [messageContext.addMany, ref.current])

    if (messageContext.data === null) {
        <MainBackground>
            <Ul className={className}>
                {
                    Array.from({ length: 5 }).map((_, index) => (
                        <MessageListItem key={index} />
                    ))
                }
            </Ul>
        </MainBackground>
    }

    return (
        <MessageListBoundary>
            <MainBackground>
                <Ul className={className} ref={ref}>
                    {
                        messageContext.data?.map((message) => (
                            <MessageItemPrivider key={message.id} message={message}>
                                <UserProvider userId={message.userId}>
                                    <MessageListItem />
                                </UserProvider>
                            </MessageItemPrivider>
                        ))
                    }
                </Ul>
            </MainBackground>
        </MessageListBoundary>
    )
}

export default MessageList