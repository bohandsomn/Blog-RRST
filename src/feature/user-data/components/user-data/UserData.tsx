import React, { useContext } from 'react'
import WithPhoto from '@/components/with-photo'
import { SecondaryBackground } from '../../../../layouts/wrapper'
import { Div, OriginalImg } from '@/components/atoms'
import UserDataContext from '../../context/user-data'
import UserContent from './user-content'
import UserSettings from './user-settings'
import useAppQuery from '../../../../hooks/useAppQuery'
import UpdateToggleProvider from '../../provider/UpdateToggle'
import SubscribeProvider from '../../provider/Subscribe'
import Friendships from './friendships'

const UserData: React.FC = () => {
    const user = useContext(UserDataContext)
    const query = useAppQuery('user')
    return (
        <UpdateToggleProvider>
            <SecondaryBackground>
                <Div query={query}>
                    <WithPhoto
                        img={
                            <OriginalImg 
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}photo/user/original/${user.id}`}
                                alt={`${user.name} ${user.surname || ''}`}
                                title="" ////////////////
                            />
                        }
                    >
                        <SubscribeProvider>
                            <UserContent />
                        </SubscribeProvider>
                        <Friendships />
                    </WithPhoto>
                    <UserSettings />
                </Div>
            </SecondaryBackground>
        </UpdateToggleProvider>
    )
}

export default UserData