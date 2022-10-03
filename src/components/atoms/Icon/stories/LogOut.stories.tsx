import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LogOut } from '../Icon'

export default {
    title: 'Atom/Icon/LogOut',
    component: LogOut,
} as ComponentMeta<typeof LogOut>

const Template: ComponentStory<typeof LogOut> = (args) => <LogOut {...args} />

export const Icon = Template.bind({})
Icon.args = {
    width: 60,
    height: 60
}