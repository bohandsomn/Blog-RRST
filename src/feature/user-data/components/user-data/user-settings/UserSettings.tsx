import React, { useContext } from 'react'
import { ListItem } from '@/components/list'
import SettingsList from '@/components/settings-list'
import ToggleProvider from '../../../../../provider/toggle'
import { Chat, Update } from '@/components/atoms'
import UpdateToggle from '../../../context/update-toggle'
import useChat from '../../../hooks/useChat'

const UserSettings: React.FC = () => {
    const { isMatchUser, handleGoToChat } = useChat()
    const updateToggleContext = useContext(UpdateToggle)

    return (
        <ToggleProvider>
            <SettingsList>
                {
                    !isMatchUser && (
                        <ToggleProvider>
                            <ListItem onClick={handleGoToChat} right={<Chat />}>
                                Chat
                            </ListItem>
                        </ToggleProvider>
                    )
                }
                {
                    isMatchUser && (
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