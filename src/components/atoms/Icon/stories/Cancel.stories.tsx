import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Cancel } from '../Icon'

export default {
    title: 'Atom/Icon/Cancel',
    component: Cancel,
} as ComponentMeta<typeof Cancel>

const Template: ComponentStory<typeof Cancel> = (args) => <Cancel {...args} />

export const Icon = Template.bind({})
Icon.args = {
    width: 24,
    height: 24
}