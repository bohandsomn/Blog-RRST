import React, { useContext, useMemo } from 'react'
import Skeleton from 'react-loading-skeleton'
import WithPhoto from '@/components/with-photo'
import { Li, MainParagraph, MessageImg } from '@/components/atoms'
import MessageItemContext from '../../../../../context/message-item'
import useAppSelector from '../../../../../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../../../../../store'
import { SecondaryBackground } from '../../../../../../../layouts/wrapper'
import { UserContext } from '../../../../../../post'
import useAppStyles from 'src/hooks/useAppStyles'
import { useTranslation } from 'src/feature/internationalization'

const MessageListItem: React.FC = () => {
    const message = useContext(MessageItemContext)
    const authorizationUser = useAppSelector(authorizationSelector)
    const currentUser = useContext(UserContext)
    const isMyMessage: boolean = useMemo(() => {
        if (authorizationUser.data?.id === undefined) {
            return false
        }
        if (message?.userId === undefined) {
            return false
        }
        if (message.userId !== authorizationUser.data.id) {
            return false
        }
        return true
    }, [authorizationUser.data?.id, message?.userId])
    const myMessageClassName = useAppStyles('display-flex', 'justify-content-flex-end')
    const {translation} = useTranslation()
    return (
        <Li className={isMyMessage ? myMessageClassName : undefined}>
            <WithPhoto
                img={
                    <MessageImg 
                        src={
                            currentUser.data?.id
                                ? `${process.env.NEXT_PUBLIC_BASE_URL}photo/user/message/${currentUser.data.id}`
                                : ''
                        }
                        alt={`${currentUser.data?.name || ''} ${currentUser.data?.surname || ''}`}
                        title={translation.feature.chat.message.list.item.photo.title}
                    />
                }
                right={isMyMessage}
            >
                <SecondaryBackground>
                    <MainParagraph>
                        {
                            message?.content
                                ? message.content
                                : <Skeleton />
                        }
                    </MainParagraph>
                </SecondaryBackground>
            </WithPhoto>
        </Li>
    )
}

export default MessageListItem