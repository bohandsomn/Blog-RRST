import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MoreVertical } from '../Icon'

export default {
    title: 'Atom/Icon/MoreVertical',
    component: MoreVertical,
} as ComponentMeta<typeof MoreVertical>

const Template: ComponentStory<typeof MoreVertical> = (args) => <MoreVertical {...args} />

export const Icon = Template.bind({})
Icon.args = {
    width: 32,
    height: 32
}