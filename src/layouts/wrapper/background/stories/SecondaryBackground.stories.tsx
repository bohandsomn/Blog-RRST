import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SecondaryBackground from '../SecondaryBackground'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../../../utility/type'
import AtomProviderStorybook from '../../../../service/component-explorer/AtomProviderStorybook'

export default {
  title: 'Layouts/Background/Secondary',
  component: SecondaryBackground,
} as ComponentMeta<typeof SecondaryBackground>

const Template: ComponentStory<ComponentPropsStorybook<Required<typeof SecondaryBackground.defaultProps>>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <SecondaryBackground {...args} />
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    theme: 'light',
    children: 'CHILDREN'
}

export const Dark = Template.bind({})
Dark.args = {
    theme: 'dark',
    children: 'CHILDREN'
}