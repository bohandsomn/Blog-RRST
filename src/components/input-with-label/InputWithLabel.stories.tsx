import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import InputWithLabel from './InputWithLabel'
import BodyStorybook from '../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../utility/type'
import AtomProviderStorybook from '../../service/component-explorer/AtomProviderStorybook'

export default {
  title: 'Molecule/InputWithLabel',
  component: InputWithLabel,
} as ComponentMeta<typeof InputWithLabel>

const Template: ComponentStory<ComponentPropsStorybook<Required<typeof InputWithLabel.defaultProps>>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <InputWithLabel {...args} />
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    theme: 'light',
    placeholder: 'Enter something...',
    label: 'LABEL'
}

export const Dark = Template.bind({})
Dark.args = {
    theme: 'dark',
    placeholder: 'Enter something...',
    label: 'LABEL'
}