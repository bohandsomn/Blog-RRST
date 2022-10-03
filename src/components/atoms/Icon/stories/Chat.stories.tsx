import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Chat } from '../Icon'

export default {
    title: 'Atom/Icon/Chat',
    component: Chat,
} as ComponentMeta<typeof Chat>

const Template: ComponentStory<typeof Chat> = (args) => <Chat {...args} />

export const Icon = Template.bind({})
Icon.args = {
    width: 32,
    height: 32
}