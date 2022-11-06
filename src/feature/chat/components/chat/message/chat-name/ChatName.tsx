import React, { useContext } from 'react'
import Skeleton from 'react-loading-skeleton'
import { MainBigParagraph } from '@/components/atoms'
import ChatContext from '../../../../../chat/context/chat'
import useAppStyles from 'src/hooks/useAppStyles'

const ChatName: React.FC = () => {
    const chatContext = useContext(ChatContext)
    const className = useAppStyles('display-flex', 'justify-content-center')
    if (chatContext.data?.name === undefined || chatContext.isLoading) {
        return <Skeleton />
    }
    
    return (
        <MainBigParagraph className={className}>
            {chatContext.data.name}
        </MainBigParagraph>
    )
}

export default ChatName