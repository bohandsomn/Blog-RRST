import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MainParagraph } from '../P'

export default {
    title: 'Atom/P/MainParagraph',
    component: MainParagraph,
} as ComponentMeta<typeof MainParagraph>

const Template: ComponentStory<typeof MainParagraph> = (args) => <MainParagraph {...args} />

export const Light = Template.bind({})
Light.args = {
    children: 'MainParagraph',
    style: {
        fontFamily: "'Roboto', sans-serif",
        color: "#FFFFFF",
        backgroundColor: '#657178'
    }
}
export const Dark = Template.bind({})
Dark.args = {
    children: 'MainParagraph',
    style: {
        fontFamily: "'Roboto', sans-serif",
        color: "#FFFFFF",
        backgroundColor: '#657178'
    }
}