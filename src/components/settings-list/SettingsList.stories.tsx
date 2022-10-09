import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SettingsList from './SettingsList'
import BodyStorybook from '../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../utility/type'
import AtomProviderStorybook from '../../service/component-explorer/AtomProviderStorybook'
import ToggleProvider from '../../provider/toggle'
import { ListItem } from '../list'
import { Account, Chat, LogOut, Settings } from '../atoms'

export default {
  title: 'Molecule/SettingsList',
  component: SettingsList,
} as ComponentMeta<typeof SettingsList>

const Template: ComponentStory<ComponentPropsStorybook<Required<typeof SettingsList.defaultProps>>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <ToggleProvider>
                    <SettingsList {...args}>
                        <ToggleProvider>
                            <ListItem right={<Account />}>Account</ListItem>
                        </ToggleProvider>
                        <ToggleProvider>
                            <ListItem right={<Chat />}>Chat</ListItem>
                        </ToggleProvider>
                        <ToggleProvider>
                            <ListItem right={<LogOut />}>Log-out</ListItem>
                        </ToggleProvider>
                        <ToggleProvider>
                            <ListItem right={<Settings />}>Settings</ListItem>
                        </ToggleProvider>
                    </SettingsList>
                </ToggleProvider>
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    theme: 'light'
}

export const Dark = Template.bind({})
Dark.args = {
    theme: 'dark'
}