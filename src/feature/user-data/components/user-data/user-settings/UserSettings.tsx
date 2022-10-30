import React, { useContext } from 'react'
import { ListItem } from '@/components/list'
import SettingsList from '@/components/settings-list'
import ToggleProvider from '../../../../../provider/toggle'
import { Chat, Update } from '@/components/atoms'
import useAppSelector from '../../../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../../../store'
import UserDataContext from '../../../context/user-data'
import UpdateToggle from '../../../context/update-toggle'

const UserSettings: React.FC = () => {
    const authorization = useAppSelector(authorizationSelector)
    const user = useContext(UserDataContext)
    const isMatch = user.id === authorization.data?.id
    const updateToggleContext = useContext(UpdateToggle)

    return (
        <ToggleProvider>
            <SettingsList>
                <ToggleProvider>
                    <ListItem right={<Chat />}>
                        Chat
                    </ListItem>
                </ToggleProvider>
                {
                    isMatch && (
                        <ToggleProvider>
                            <ListItem onClick={updateToggleContext.handleSetTrue} right={<Update />}>
                                Update
                            </ListItem>
                        </ToggleProvider>
                    )
                }
            </SettingsList>
        </ToggleProvider>
    )
}

export default UserSettings