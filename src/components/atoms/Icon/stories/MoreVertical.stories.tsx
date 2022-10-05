import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MoreVertical } from '../Icon'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import ToggleProvider from '../../../../provider/toggle'
import { ComponentPropsStorybook } from '../../../../utility/type'

export default {
    title: 'Atom/Icon/MoreVertical',
    component: MoreVertical,
} as ComponentMeta<typeof MoreVertical>

const Template: ComponentStory<ComponentPropsStorybook<typeof MoreVertical.defaultProps>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <ToggleProvider>
                <MoreVertical {...args} />
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