import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from './Input'
import AtomProvider from '../../../packages/atom/provider'
import STYLES from '../../../styles'
import useInput from '../../../hooks/useInput'
import useAppStyles from '../../../hooks/useAppStyles'

export default {
  title: 'Atom/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => {
    const className = useAppStyles(
        'padding-top-10', 
        'padding-right-20', 
        'padding-bottom-10', 
        'padding-left-20',
        'border-none'
    )
    const [value, handleChange] = useInput('')

    return (
        <AtomProvider styles={STYLES}>
            <Input 
                value={value}
                onChange={handleChange}
                placeholder="Enter smth..."
                className={className} 
                {...args} 
            />
        </AtomProvider>
    )
}

export const MainInput = Template.bind({})
MainInput.args = {
    style: {
        borderRadius: 10,
        boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.25)',
        backgroundColor: '#2E2E2E',
        color: 'white'
    }
}