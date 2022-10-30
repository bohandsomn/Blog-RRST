import Skeleton from 'react-loading-skeleton'
import React, { useContext } from 'react'
import { Li, MainBoldParagraph, PreviewImg } from '@/components/atoms'
import WithPhoto from '@/components/with-photo'
import { UserContext } from '../../../../../../post'

const FriendshipsListItem: React.FC = () => {
    const user = useContext(UserContext)
    return (
        <Li>
            <WithPhoto
                img={
                    <PreviewImg 
                        src={
                            typeof user.data?.id === 'number'
                                ? `${process.env.NEXT_PUBLIC_BASE_URL}photo/user/post/${user.data.id}`
                                : ''
                        }
                        alt={`${user.data?.name || ''} ${user.data?.surname || ''}`}
                        title="" //////////////
                    />
                }
            >
                {
                    user.data === null 
                        ? <Skeleton />
                        : (
                            <MainBoldParagraph>
                                {user.data.name}&nbsp;{user.data?.surname}
                            </MainBoldParagraph>
                        )
                }
            </WithPhoto>
        </Li>
    )
}

export default FriendshipsListItem