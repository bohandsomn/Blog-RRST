import React, { useContext } from 'react'
import { Li, MainBoldParagraph, PreviewImg } from '@/components/atoms'
import WithPhoto from '@/components/with-photo'
import ChatListItemContext from '../../../../../chat/context/chat-list-item'

const ChatPreviewListItem: React.FC = () => {
    const chatListItemContext = useContext(ChatListItemContext)
    return (
        <Li>
            <WithPhoto
                img={
                    <PreviewImg 
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}photo/chat/preview/${chatListItemContext.id}`}
                        alt="" ///////////////////
                        title="" ////////////////
                    />
                }
            >
                <MainBoldParagraph>
                    {chatListItemContext.name}
                </MainBoldParagraph>
            </WithPhoto>
        </Li>
    )
}

export default ChatPreviewListItem