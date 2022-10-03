import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Dislike } from '../Icon'

export default {
    title: 'Atom/Icon/Dislike',
    component: Dislike,
} as ComponentMeta<typeof Dislike>

const Template: ComponentStory<typeof Dislike> = (args) => <Dislike {...args} />

export const Icon = Template.bind({})
Icon.args = {
    width: 16,
    height: 16
}