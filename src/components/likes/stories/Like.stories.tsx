import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Like from '../Like'
import BodyStorybook from '../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../../utility/type'
import AtomProviderStorybook from '../../../service/component-explorer/AtomProviderStorybook'
import ToggleProvider from '../../../provider/toggle'

export default {
  title: 'Molecule/Likes/Like',
  component: Like,
} as ComponentMeta<typeof Like>

const Template: ComponentStory<ComponentPropsStorybook<Required<typeof Like.defaultProps>>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <ToggleProvider>
                    <Like {...args} />
                </ToggleProvider>
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    theme: 'light'
}

export const Dark = Template.bind({})
Dark.args = {
    theme: 'dark'
}