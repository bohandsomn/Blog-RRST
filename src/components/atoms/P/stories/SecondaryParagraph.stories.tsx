import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SecondaryParagraph } from '../P'

export default {
    title: 'Atom/P/SecondaryParagraph',
    component: SecondaryParagraph,
} as ComponentMeta<typeof SecondaryParagraph>

const Template: ComponentStory<typeof SecondaryParagraph> = (args) => <SecondaryParagraph {...args} />

export const Light = Template.bind({})
Light.args = {
    children: 'SecondaryParagraph',
    style: {
        fontFamily: "'Roboto', sans-serif",
        color: "#3978F1"
    }
}
export const Dark = Template.bind({})
Dark.args = {
    children: 'SecondaryParagraph',
    style: {
        fontFamily: "'Roboto', sans-serif",
        color: "#F1A739"
    }
}