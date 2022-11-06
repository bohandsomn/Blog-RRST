import React, { useContext } from 'react'
import { Div, Ul } from '@/components/atoms'
import ChatListContext from '../../../../chat/context/chat-list'
import ChatPreviewListItem from './chat-preview-list-item'
import ChatListItemProvider from '../../../provider/ChatListItem'
import { SecondaryBackground, SidebarContainer } from '../../../../../layouts/wrapper'
import useAppStyles from '../../../../../hooks/useAppStyles'

const ChatPreviewList: React.FC = () => {
    const chatListContext = useContext(ChatListContext)
    const classNameList = useAppStyles('children/margin-bottom-10')
    const classNameWrapper = useAppStyles('flex-1')
    return (
        <Div className={classNameWrapper}>
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