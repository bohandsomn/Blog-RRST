import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from './Input'
import useInput from '../../../hooks/useInput'
import useAppStyles from '../../../hooks/useAppStyles'
import BodyStorybook from '../../../service/component-explorer/BodyStorybook'
import AtomProviderStorybook from '../../../service/component-explorer/AtomProviderStorybook'
import { ComponentPropsStorybook } from '../../../utility/type'

export default {
  title: 'Atom/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<ComponentPropsStorybook<typeof Input.defaultProps>> = ({theme, ...args}) => {
    const className = useAppStyles(
        'padding-top-10', 
        'padding-right-20', 
        'padding-bottom-10', 
        'padding-left-20',
        'border-none',
        'border-radius--border-radius', 
        'box-shadow--main-bg-lilear',
        'background-color--main-bg-color',
    )
    const [value, handleChange] = useInput('')

    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <Input 
                    value={value}
                    onChange={handleChange}
                    placeholder="Enter smth..."
                    className={className} 
                    {...args} 
                />
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