import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MainBigParagraph } from '../P'

export default {
    title: 'Atom/P/MainBigParagraph',
    component: MainBigParagraph,
} as ComponentMeta<typeof MainBigParagraph>

const Template: ComponentStory<typeof MainBigParagraph> = (args) => <MainBigParagraph {...args} />

export const Light = Template.bind({})
Light.args = {
    children: 'MainBigParagraph',
    style: {
        fontFamily: "'Roboto', sans-serif",
        fontWeight: "bold",
        fontSize: 24,
        color: "#FFFFFF",
        backgroundColor: '#657178'
    }
}
export const Dark = Template.bind({})
Dark.args = {
    children: 'MainBigParagraph',
    style: {
        fontFamily: "'Roboto', sans-serif",
        fontWeight: "bold",
        fontSize: 24,
        color: "#FFFFFF",
        backgroundColor: '#657178'
    }
}