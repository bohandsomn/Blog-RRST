import React, { useContext } from 'react'
import { Ul } from '@/components/atoms'
import FriendshipsContext from '../../../../context/friendships'
import { UserProvider } from '../../../../../post'
import FriendshipsListItem from './friendships-list-item'

const FriendshipsList: React.FC = () => {
    const friendshipsContext = useContext(FriendshipsContext)
    return (
        <Ul>
            {
                friendshipsContext.data?.map((dto) => (
                    <UserProvider key={dto.id} userId={dto.subscriberId}>
                        <FriendshipsListItem />
                    </UserProvider>
                ))
            }
        </Ul>
    )
}

export default FriendshipsList