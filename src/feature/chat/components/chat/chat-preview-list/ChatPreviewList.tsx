import React, { useContext } from 'react'
import { Div, Ul } from '@/components/atoms'
import ChatListContext from '../../../../chat/context/chat-list'
import ChatPreviewListItem from './chat-preview-list-item'
import ChatListItemProvider from '../../../provider/ChatListItem'
import { SecondaryBackground } from '../../../../../layouts/wrapper'
import useAppStyles from '../../../../../hooks/useAppStyles'
import useAppQuery from '../../../../../hooks/useAppQuery'

const ChatPreviewList: React.FC = () => {
    const chatListContext = useContext(ChatListContext)
    const classNameList = useAppStyles('children/margin-bottom-10', 'overflow-y-scroll')
    const query = useAppQuery('container-sidebar', {remove: ['margin-0-auto']})
    return (
        <Div query={query}>
            <SecondaryBackground>
                <Ul className={classNameList}>
                    {
                        chatListContext.data?.map((chat) => (
                            <ChatListItemProvider key={chat.id} chat={chat}>
                                <ChatPreviewListItem />
                            </ChatListItemProvider>
                        ))
                    }
                </Ul>
            </SecondaryBackground>
        </Div>
    )
}

export default ChatPreviewList