import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DropDownList from './DropDownList'
import BodyStorybook from '../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../utility/type'
import AtomProviderStorybook from '../../service/component-explorer/AtomProviderStorybook'
import ToggleProvider from '../../provider/toggle'
import { ListItem } from '../list'
import { Account, Chat, LogOut, Settings } from '../atoms'

export default {
  title: 'Molecule/DropDownList',
  component: DropDownList,
} as ComponentMeta<typeof DropDownList>

const Template: ComponentStory<ComponentPropsStorybook<Required<typeof DropDownList.defaultProps>>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <ToggleProvider>
                    <DropDownList {...args}>
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
                    </DropDownList>
                </ToggleProvider>
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    chevron: 'DropDownList',
    theme: 'light'
}

export const Dark = Template.bind({})
Dark.args = {
    chevron: 'DropDownList',
    theme: 'dark'
}