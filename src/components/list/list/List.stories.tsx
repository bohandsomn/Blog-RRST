import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { List } from './List'
import BodyStorybook from '../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../../utility/type'
import AtomProviderStorybook from '../../../service/component-explorer/AtomProviderStorybook'
import { ListItem } from '../list-item'
import ToggleProvider from '../../../provider/toggle'
import { Account, Chat, LogOut, Settings, } from '../../atoms'

export default {
  title: 'Molecule/List',
  component: List,
} as ComponentMeta<typeof List>

const Template: ComponentStory<ComponentPropsStorybook<typeof List.defaultProps>> = ({theme, children, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <List {...args}>
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
                </List>
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    children: 'List',
    theme: 'light'
}

export const Dark = Template.bind({})
Dark.args = {
    children: 'List',
    theme: 'dark'
}