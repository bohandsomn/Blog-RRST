import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Posts } from '../Icon'

export default {
    title: 'Atom/Icon/Posts',
    component: Posts,
} as ComponentMeta<typeof Posts>

const Template: ComponentStory<typeof Posts> = (args) => <Posts {...args} />

export const Icon = Template.bind({})
Icon.args = {
    width: 32,
    height: 32
}