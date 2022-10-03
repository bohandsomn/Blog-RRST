import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Logo } from '../Icon'

export default {
    title: 'Atom/Icon/Logo',
    component: Logo,
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Icon = Template.bind({})
Icon.args = {
    width: 100,
    height: 70
}