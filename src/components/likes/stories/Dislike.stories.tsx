import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Dislike from '../Dislike'
import BodyStorybook from '../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../../utility/type'
import AtomProviderStorybook from '../../../service/component-explorer/AtomProviderStorybook'
import ToggleProvider from '../../../provider/toggle'

export default {
  title: 'Molecule/Likes/Dislike',
  component: Dislike,
} as ComponentMeta<typeof Dislike>

const Template: ComponentStory<ComponentPropsStorybook<Required<typeof Dislike.defaultProps>>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <ToggleProvider>
                    <Dislike {...args} />
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