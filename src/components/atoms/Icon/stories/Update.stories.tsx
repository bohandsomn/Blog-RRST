import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Update } from '../Icon'

export default {
    title: 'Atom/Icon/Update',
    component: Update,
} as ComponentMeta<typeof Update>

const Template: ComponentStory<typeof Update> = (args) => <Update {...args} />

export const Icon = Template.bind({})
Icon.args = {
    width: 32,
    height: 32
}