import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import InputList from './InputList'
import BodyStorybook from '../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../utility/type'
import AtomProviderStorybook from '../../service/component-explorer/AtomProviderStorybook'
import OptionsProvider from './provider/Options'
import { options } from './__mock__'

export default {
  title: 'Molecule/InputList',
  component: InputList,
} as ComponentMeta<typeof InputList>

const Template: ComponentStory<ComponentPropsStorybook<Required<typeof InputList.defaultProps>>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <OptionsProvider options={options}>
                    <InputList {...args} />
                </OptionsProvider>
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    theme: 'light',
    label: 'Select an option'
}

export const Dark = Template.bind({})
Dark.args = {
    theme: 'dark',
    label: 'Select an option'
}