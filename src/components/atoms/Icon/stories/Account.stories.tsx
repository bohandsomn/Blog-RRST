import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Account } from '../Icon'

export default {
    title: 'Atom/Icon/Account',
    component: Account,
} as ComponentMeta<typeof Account>

const Template: ComponentStory<typeof Account> = (args) => <Account {...args} />

export const Icon = Template.bind({})
Icon.args = {
    width: 32,
    height: 32
}