import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Post } from '../Icon'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import ToggleProvider from '../../../../provider/toggle'
import { ComponentPropsStorybook } from '../../../../utility/type'

export default {
    title: 'Atom/Icon/Post',
    component: Post,
} as ComponentMeta<typeof Post>

const Template: ComponentStory<ComponentPropsStorybook<typeof Post.defaultProps>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <ToggleProvider>
                <Post {...args} />
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