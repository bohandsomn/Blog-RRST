import React from 'react'
import DropDownList from '@/components/drop-down-list'
import { Div } from '@/components/atoms'
import FriendshipsList from './friendships-list'
import UserSubscribersProvider from '../../../provider/UserSubscribers'
import UserSubscriptionsProvider from '../../../provider/UserSubscriptions'
import FriendshipsProvider from '../../../provider/Friendships'
import ToggleProvider from '../../../../../provider/toggle'
import useAppQuery from '../../../../../hooks/useAppQuery'
import useAppStyles from 'src/hooks/useAppStyles'

const Friendships: React.FC = () => {
    const query = useAppQuery('user-friendships')
    const className = useAppStyles('position-static')
    return (
        <Div query={query}>
            <UserSubscribersProvider>
                <FriendshipsProvider>
                    <ToggleProvider>
                        <Div className={className}>
                            <DropDownList chevron={'Subscribers'}>
                                <FriendshipsList />
                            </DropDownList>
                        </Div>
                    </ToggleProvider>
                </FriendshipsProvider>
            </UserSubscribersProvider>
            <UserSubscriptionsProvider>
                <FriendshipsProvider>
                    <ToggleProvider>
                        <Div className={className}>
                            <DropDownList chevron={'Subscriptions'}>
                                <FriendshipsList />
                            </DropDownList>
                        </Div>
                    </ToggleProvider>
                </FriendshipsProvider>
            </UserSubscriptionsProvider>
        </Div>
    )
}

export default Friendships