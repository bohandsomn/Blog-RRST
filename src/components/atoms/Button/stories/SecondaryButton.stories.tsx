import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SecondaryButton } from '../Button'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../../../utility/type'
import AtomProviderStorybook from '../../../../service/component-explorer/AtomProviderStorybook'

export default {
  title: 'Atom/Button/Secondary',
  component: SecondaryButton,
} as ComponentMeta<typeof SecondaryButton>

const Template: ComponentStory<ComponentPropsStorybook<typeof SecondaryButton.defaultProps>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <SecondaryButton {...args} />
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