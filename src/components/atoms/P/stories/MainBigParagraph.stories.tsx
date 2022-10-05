import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MainBigParagraph } from '../P'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../../../utility/type'
import AtomProviderStorybook from '../../../../service/component-explorer/AtomProviderStorybook'

export default {
    title: 'Atom/P/MainBigParagraph',
    component: MainBigParagraph,
} as ComponentMeta<typeof MainBigParagraph>

const Template: ComponentStory<ComponentPropsStorybook<typeof MainBigParagraph.defaultProps>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <MainBigParagraph {...args} />
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    children: 'MainBigParagraph',
    theme: 'light'
}

export const Dark = Template.bind({})
Dark.args = {
    children: 'MainBigParagraph',
    theme: 'dark'
}