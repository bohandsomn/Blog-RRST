import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Share } from '../Icon'

export default {
    title: 'Atom/Icon/Share',
    component: Share,
} as ComponentMeta<typeof Share>

const Template: ComponentStory<typeof Share> = (args) => <Share {...args} />

export const Icon = Template.bind({})
Icon.args = {
    width: 32,
    height: 32
}