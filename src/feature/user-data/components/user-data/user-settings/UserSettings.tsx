import React, { useContext } from 'react'
import { ListItem } from '@/components/list'
import SettingsList from '@/components/settings-list'
import ToggleProvider from '../../../../../provider/toggle'
import { Chat, Update } from '@/components/atoms'
import UpdateToggle from '../../../context/update-toggle'
import useChat from '../../../hooks/useChat'
import { useTranslation } from '../../../../internationalization'

const UserSettings: React.FC = () => {
    const { isMatchUser, handleGoToChat } = useChat()
    const updateToggleContext = useContext(UpdateToggle)
    const {translation} = useTranslation()

    return (
        <ToggleProvider>
            <SettingsList>
                {
                    !isMatchUser && (
                        <ToggleProvider>
                            <ListItem onClick={handleGoToChat} right={<Chat />}>
                                {translation.feature['user-data']['user-settings'].chat}
                            </ListItem>
                        </ToggleProvider>
                    )
                }
                {
                    isMatchUser && (
                        <ToggleProvider>
                            <ListItem onClick={updateToggleContext.handleSetTrue} right={<Update />}>
                                {translation.feature['user-data']['user-settings'].update}
                            </ListItem>
                        </ToggleProvider>
                    )
                }
            </SettingsList>
        </ToggleProvider>
    )
}

export default UserSettings