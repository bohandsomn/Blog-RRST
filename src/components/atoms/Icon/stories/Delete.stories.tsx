import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Delete } from '../Icon'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import ToggleProvider from '../../../../provider/toggle'
import { ComponentPropsStorybook } from '../../../../utility/type'

export default {
    title: 'Atom/Icon/Delete',
    component: Delete,
} as ComponentMeta<typeof Delete>

const Template: ComponentStory<ComponentPropsStorybook<typeof Delete.defaultProps>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <ToggleProvider>
                <Delete {...args} />
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