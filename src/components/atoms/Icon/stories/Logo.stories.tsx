import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Logo } from '../Icon'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import ToggleProvider from '../../../../provider/toggle'
import { ComponentPropsStorybook } from '../../../../utility/type'

export default {
    title: 'Atom/Icon/Logo',
    component: Logo,
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<ComponentPropsStorybook<typeof Logo.defaultProps>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <ToggleProvider>
                <Logo {...args} />
            </ToggleProvider>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    width: 100,
    height: 70,
    theme: 'light'
}

export const Dark = Template.bind({})
Dark.args = {
    width: 100,
    height: 70,
    theme: 'dark'
}