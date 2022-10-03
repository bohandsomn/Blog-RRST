import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MainBoldParagraph } from '../P'

export default {
    title: 'Atom/P/MainBoldParagraph',
    component: MainBoldParagraph,
} as ComponentMeta<typeof MainBoldParagraph>

const Template: ComponentStory<typeof MainBoldParagraph> = (args) => <MainBoldParagraph {...args} />

export const Light = Template.bind({})
Light.args = {
    children: 'MainBoldParagraph',
    style: {
        fontFamily: "'Roboto', sans-serif",
        fontWeight: "bold",
        color: "#FFFFFF",
        backgroundColor: '#657178'
    }
}
export const Dark = Template.bind({})
Dark.args = {
    children: 'MainBoldParagraph',
    style: {
        fontFamily: "'Roboto', sans-serif",
        fontWeight: "bold",
        color: "#FFFFFF",
        backgroundColor: '#657178'
    }
}