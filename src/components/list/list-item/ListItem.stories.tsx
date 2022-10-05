import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ListItem } from './ListItem'
import ToggleProvider from '../../../provider/toggle'
import { Account } from '../../atoms'
import BodyStorybook from '../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../../utility/type'
import AtomProviderStorybook from '../../../service/component-explorer/AtomProviderStorybook'

export default {
  title: 'Molecule/List/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>

const Template: ComponentStory<ComponentPropsStorybook<typeof ListItem.defaultProps>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <ToggleProvider>
                    <ListItem {...args} />
                </ToggleProvider>
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const RightDark = Template.bind({})
RightDark.args = {
    children: 'RightDark',
    theme: 'dark',
    right: <Account />
}

export const LeftDark = Template.bind({})
LeftDark.args = {
    children: 'LeftDark',
    theme: 'dark',
    left: <Account />
}

export const RightLight = Template.bind({})
RightLight.args = {
    children: 'RightLight',
    theme: 'light',
    right: <Account />
}

export const LeftLight = Template.bind({})
LeftLight.args = {
    children: 'LeftLight',
    theme: 'light',
    left: <Account />
}