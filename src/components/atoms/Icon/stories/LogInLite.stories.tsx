import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LogInLite } from '../Icon'

export default {
    title: 'Atom/Icon/LogInLite',
    component: LogInLite,
} as ComponentMeta<typeof LogInLite>

const Template: ComponentStory<typeof LogInLite> = (args) => <LogInLite {...args} />

export const Icon = Template.bind({})
Icon.args = {
    width: 32,
    height: 32
}