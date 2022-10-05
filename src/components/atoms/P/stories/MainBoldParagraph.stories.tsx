import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MainBoldParagraph } from '../P'
import { ComponentPropsStorybook } from '../../../../utility/type'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import AtomProviderStorybook from '../../../../service/component-explorer/AtomProviderStorybook'

export default {
    title: 'Atom/P/MainBoldParagraph',
    component: MainBoldParagraph,
} as ComponentMeta<typeof MainBoldParagraph>

const Template: ComponentStory<ComponentPropsStorybook<typeof MainBoldParagraph.defaultProps>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <MainBoldParagraph {...args} />
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    children: 'MainBoldParagraph',
    theme: 'light'
}

export const Dark = Template.bind({})
Dark.args = {
    children: 'MainBoldParagraph',
    theme: 'dark'
}