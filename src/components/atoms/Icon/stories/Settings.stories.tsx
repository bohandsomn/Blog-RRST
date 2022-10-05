import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Settings } from '../Icon'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import ToggleProvider from '../../../../provider/toggle'
import { ComponentPropsStorybook } from '../../../../utility/type'

export default {
    title: 'Atom/Icon/Settings',
    component: Settings,
} as ComponentMeta<typeof Settings>

const Template: ComponentStory<ComponentPropsStorybook<typeof Settings.defaultProps>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <ToggleProvider>
                <Settings {...args} />
            </ToggleProvider>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    width: 32,
    height: 32,
    theme: 'light'
}

export const Dark = Template.bind({})
Dark.args = {
    width: 32,
    height: 32,
    theme: 'dark'
}