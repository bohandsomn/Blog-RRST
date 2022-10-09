import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HorizontalDescription from '../HorizontalDescription'
import BodyStorybook from '../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../../utility/type'
import AtomProviderStorybook from '../../../service/component-explorer/AtomProviderStorybook'

export default {
  title: 'Molecule/Description/Horizontal',
  component: HorizontalDescription,
} as ComponentMeta<typeof HorizontalDescription>

const Template: ComponentStory<ComponentPropsStorybook<Required<typeof HorizontalDescription.defaultProps>>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <HorizontalDescription {...args} />
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    theme: 'light',
    header: 'HEADER',
    text: 'TEXT'
}

export const Dark = Template.bind({})
Dark.args = {
    theme: 'dark',
    header: 'HEADER',
    text: 'TEXT'
}