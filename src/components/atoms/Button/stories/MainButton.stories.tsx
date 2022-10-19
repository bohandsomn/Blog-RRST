import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MainButton } from '../Button'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../../../utility/type'
import AtomProviderStorybook from '../../../../service/component-explorer/AtomProviderStorybook'

export default {
  title: 'Atom/Button/Main',
  component: MainButton,
} as ComponentMeta<typeof MainButton>

const Template: ComponentStory<ComponentPropsStorybook<typeof MainButton.defaultProps>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <MainButton {...args} />
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    children: 'Light',
    theme: 'light'
}

export const Dark = Template.bind({})
Dark.args = {
    children: 'Dark',
    theme: 'dark'
}