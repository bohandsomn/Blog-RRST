import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Chevron from './Chevron'
import BodyStorybook from '../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../utility/type'
import AtomProviderStorybook from '../../service/component-explorer/AtomProviderStorybook'
import ToggleProvider from '../../provider/toggle'

export default {
  title: 'Molecule/Chevron',
  component: Chevron,
} as ComponentMeta<typeof Chevron>

const Template: ComponentStory<ComponentPropsStorybook<typeof Chevron.defaultProps>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <ToggleProvider>
                    <Chevron {...args} />
                </ToggleProvider>
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    children: 'Chevron',
    theme: 'light'
}

export const Dark = Template.bind({})
Dark.args = {
    children: 'Chevron',
    theme: 'dark'
}