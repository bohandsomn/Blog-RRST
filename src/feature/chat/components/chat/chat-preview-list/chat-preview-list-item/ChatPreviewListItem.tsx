import React, { useContext } from 'react'
import { Li, MainBoldParagraph, PreviewImg } from '@/components/atoms'
import WithPhoto from '@/components/with-photo'
import ChatListItemContext from '../../../../../chat/context/chat-list-item'
import useAppStyles from '../../../../../../hooks/useAppStyles'
import useGoToPage from 'src/hooks/useGoToPage'

const ChatPreviewListItem: React.FC = () => {
    const chatListItemContext = useContext(ChatListItemContext)
    const className = useAppStyles('cursor-pointer')
    const { handleGoToChat } = useGoToPage({
        chat: {
            id: chatListItemContext.id
        }
    })
    return (
        <Li onClick={handleGoToChat} className={className}>
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