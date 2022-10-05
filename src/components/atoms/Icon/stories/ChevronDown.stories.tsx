import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ChevronDown } from '../Icon'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import ToggleProvider from '../../../../provider/toggle'
import { ComponentPropsStorybook } from '../../../../utility/type'

export default {
    title: 'Atom/Icon/ChevronDown',
    component: ChevronDown,
} as ComponentMeta<typeof ChevronDown>

const Template: ComponentStory<ComponentPropsStorybook<typeof ChevronDown.defaultProps>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <ToggleProvider>
                <ChevronDown {...args} />
            </ToggleProvider>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    width: 16,
    height: 16,
    theme: 'light'
}

export const Dark = Template.bind({})
Dark.args = {
    width: 16,
    height: 16,
    theme: 'dark'
}