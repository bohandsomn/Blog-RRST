import React, { useContext } from 'react'
import { Ul } from '@/components/atoms'
import ChatListContext from '../../../../chat/context/chat-list'
import ChatPreviewListItem from './chat-preview-list-item'
import ChatListItemProvider from '../../../provider/ChatListItem'
import { SecondaryBackground, SidebarContainer } from '../../../../../layouts/wrapper'

const ChatPreviewList: React.FC = () => {
    const chatListContext = useContext(ChatListContext)
    return (
        <SidebarContainer>
            <SecondaryBackground>
                <Ul>
                    {
                        chatListContext.data?.map((chat) => (
                            <ChatListItemProvider key={chat.id} chat={chat}>
                                <ChatPreviewListItem />
                            </ChatListItemProvider>
                        ))
                    }
                </Ul>
            </SecondaryBackground>
        </SidebarContainer>
    )
}

export default ChatPreviewList