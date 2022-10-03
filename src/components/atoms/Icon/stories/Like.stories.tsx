import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Like } from '../Icon'

export default {
    title: 'Atom/Icon/Like',
    component: Like,
} as ComponentMeta<typeof Like>

const Template: ComponentStory<typeof Like> = (args) => <Like {...args} />

export const Icon = Template.bind({})
Icon.args = {
    width: 16,
    height: 16
}