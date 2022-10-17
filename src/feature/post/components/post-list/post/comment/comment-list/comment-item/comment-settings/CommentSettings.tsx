import React from 'react'
import { Account, Delete, Update } from '../../../../../../../../../components/atoms'
import { ListItem } from '../../../../../../../../../components/list'
import SettingsList from '../../../../../../../../../components/settings-list'
import ToggleProvider from '../../../../../../../../../provider/toggle'

const CommentSettings: React.FC = () => {
    return (
        <ToggleProvider>
            <SettingsList>
                <ToggleProvider><ListItem right={<Account />}>User</ListItem></ToggleProvider>
                <ToggleProvider><ListItem right={<Update />}>Update</ListItem></ToggleProvider>
                <ToggleProvider><ListItem right={<Delete />}>Delete</ListItem></ToggleProvider>
            </SettingsList>
        </ToggleProvider>
    )
}

export default CommentSettings