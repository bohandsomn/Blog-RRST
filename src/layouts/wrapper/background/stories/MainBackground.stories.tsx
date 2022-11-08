import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MainBackground from '../MainBackground'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../../../utility/type'
import AtomProviderStorybook from '../../../../service/component-explorer/AtomProviderStorybook'

export default {
  title: 'Layouts/Background/Main',
  component: MainBackground,
} as ComponentMeta<typeof MainBackground>

const Template: ComponentStory<ComponentPropsStorybook<Required<typeof MainBackground.defaultProps>>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <MainBackground {...args} />
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