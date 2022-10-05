import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Share } from '../Icon'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import ToggleProvider from '../../../../provider/toggle'
import { ComponentPropsStorybook } from '../../../../utility/type'

export default {
    title: 'Atom/Icon/Share',
    component: Share,
} as ComponentMeta<typeof Share>

const Template: ComponentStory<ComponentPropsStorybook<typeof Share.defaultProps>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <ToggleProvider>
                <Share {...args} />
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