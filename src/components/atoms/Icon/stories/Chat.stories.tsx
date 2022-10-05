import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Chat } from '../Icon'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import ToggleProvider from '../../../../provider/toggle'
import { ComponentPropsStorybook } from '../../../../utility/type'

export default {
    title: 'Atom/Icon/Chat',
    component: Chat,
} as ComponentMeta<typeof Chat>

const Template: ComponentStory<ComponentPropsStorybook<typeof Chat.defaultProps>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <ToggleProvider>
                <Chat {...args} />
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