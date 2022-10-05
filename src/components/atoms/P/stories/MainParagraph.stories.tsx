import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MainParagraph } from '../P'
import { ComponentPropsStorybook } from '../../../../utility/type'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import AtomProviderStorybook from '../../../../service/component-explorer/AtomProviderStorybook'

export default {
    title: 'Atom/P/MainParagraph',
    component: MainParagraph,
} as ComponentMeta<typeof MainParagraph>

const Template: ComponentStory<ComponentPropsStorybook<typeof MainParagraph.defaultProps>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <MainParagraph {...args} />
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    children: 'MainParagraph',
    theme: 'light'
}
export const Dark = Template.bind({})
Dark.args = {
    children: 'MainParagraph',
    theme: 'dark'
}