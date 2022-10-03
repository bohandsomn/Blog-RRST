import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Delete } from '../Icon'

export default {
    title: 'Atom/Icon/Delete',
    component: Delete,
} as ComponentMeta<typeof Delete>

const Template: ComponentStory<typeof Delete> = (args) => <Delete {...args} />

export const Icon = Template.bind({})
Icon.args = {
    width: 32,
    height: 32
}