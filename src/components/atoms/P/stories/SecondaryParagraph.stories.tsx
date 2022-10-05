import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SecondaryParagraph } from '../P'
import { ComponentPropsStorybook } from '../../../../utility/type'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import AtomProviderStorybook from '../../../../service/component-explorer/AtomProviderStorybook'

export default {
    title: 'Atom/P/SecondaryParagraph',
    component: SecondaryParagraph,
} as ComponentMeta<typeof SecondaryParagraph>

const Template: ComponentStory<ComponentPropsStorybook<typeof SecondaryParagraph.defaultProps>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <SecondaryParagraph {...args} />
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    children: 'SecondaryParagraph',
    theme: 'light'
}
export const Dark = Template.bind({})
Dark.args = {
    children: 'SecondaryParagraph',
    theme: 'dark'
}