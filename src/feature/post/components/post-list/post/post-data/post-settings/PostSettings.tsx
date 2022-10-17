import React from 'react'
import { Account, Delete, Post, Update } from '../../../../../../../components/atoms'
import { ListItem } from '../../../../../../../components/list'
import SettingsList from '../../../../../../../components/settings-list'
import ToggleProvider from '../../../../../../../provider/toggle'

const PostSettings: React.FC = () => {
    return (
        <ToggleProvider>
            <SettingsList>
                <ToggleProvider><ListItem right={<Account />}>User</ListItem></ToggleProvider>
                <ToggleProvider><ListItem right={<Post />}>Post</ListItem></ToggleProvider>
                <ToggleProvider><ListItem right={<Update />}>Update</ListItem></ToggleProvider>
                <ToggleProvider><ListItem right={<Delete />}>Delete</ListItem></ToggleProvider>
            </SettingsList>
        </ToggleProvider>
    )
}

export default PostSettings