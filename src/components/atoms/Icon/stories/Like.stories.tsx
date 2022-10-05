import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Like } from '../Icon'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import ToggleProvider from '../../../../provider/toggle'
import { ComponentPropsStorybook } from '../../../../utility/type'

export default {
    title: 'Atom/Icon/Like',
    component: Like,
} as ComponentMeta<typeof Like>

const Template: ComponentStory<ComponentPropsStorybook<typeof Like.defaultProps>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <ToggleProvider>
                <Like {...args} />
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