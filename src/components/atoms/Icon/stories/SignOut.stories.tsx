import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SignOut } from '../Icon'

export default {
    title: 'Atom/Icon/SignOut',
    component: SignOut,
} as ComponentMeta<typeof SignOut>

const Template: ComponentStory<typeof SignOut> = (args) => <SignOut {...args} />

export const Icon = Template.bind({})
Icon.args = {
    width: 60,
    height: 60
}
export const IconLite = Template.bind({})
IconLite.args = {
    width: 32,
    height: 32
}