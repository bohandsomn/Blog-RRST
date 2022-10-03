import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ChevronDown } from '../Icon'

export default {
    title: 'Atom/Icon/ChevronDown',
    component: ChevronDown,
} as ComponentMeta<typeof ChevronDown>

const Template: ComponentStory<typeof ChevronDown> = (args) => <ChevronDown {...args} />

export const Icon = Template.bind({})
Icon.args = {
    width: 16,
    height: 16
}