import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LogIn } from '../Icon'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import ToggleProvider from '../../../../provider/toggle'
import { ComponentPropsStorybook } from '../../../../utility/type'

export default {
    title: 'Atom/Icon/LogIn',
    component: LogIn,
} as ComponentMeta<typeof LogIn>

const Template: ComponentStory<ComponentPropsStorybook<typeof LogIn.defaultProps>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <ToggleProvider>
                <LogIn {...args} />
            </ToggleProvider>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    width: 75,
    height: 75,
    theme: 'light'
}

export const Dark = Template.bind({})
Dark.args = {
    width: 75,
    height: 75,
    theme: 'dark'
}