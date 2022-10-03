import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Settings } from '../Icon'

export default {
    title: 'Atom/Icon/Settings',
    component: Settings,
} as ComponentMeta<typeof Settings>

const Template: ComponentStory<typeof Settings> = (args) => <Settings {...args} />

export const Icon = Template.bind({})
Icon.args = {
    width: 32,
    height: 32
}