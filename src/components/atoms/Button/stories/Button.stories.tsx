import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '../Button'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../../../utility/type'
import AtomProviderStorybook from '../../../../service/component-explorer/AtomProviderStorybook'

export default {
  title: 'Atom/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<ComponentPropsStorybook<typeof Button.defaultProps>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <Button {...args} />
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