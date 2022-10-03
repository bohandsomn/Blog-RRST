import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LogIn } from '../Icon'

export default {
    title: 'Atom/Icon/LogIn',
    component: LogIn,
} as ComponentMeta<typeof LogIn>

const Template: ComponentStory<typeof LogIn> = (args) => <LogIn {...args} />

export const Icon = Template.bind({})
Icon.args = {
    width: 32,
    height: 32
}