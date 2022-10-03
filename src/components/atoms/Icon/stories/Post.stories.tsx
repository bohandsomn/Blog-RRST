import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Post } from '../Icon'

export default {
    title: 'Atom/Icon/Post',
    component: Post,
} as ComponentMeta<typeof Post>

const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />

export const Icon = Template.bind({})
Icon.args = {
    width: 32,
    height: 32
}