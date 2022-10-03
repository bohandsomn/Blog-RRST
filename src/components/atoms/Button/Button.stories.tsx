import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'
import AtomProvider from '../../../packages/atom/provider'
import STYLES from '../../../styles'
import useAppStyles from '../../../hooks/useAppStyles'

export default {
  title: 'Atom/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
    const className = useAppStyles(
        'padding-top-10', 
        'padding-right-20', 
        'padding-bottom-10', 
        'padding-left-20',
        'border-none',
        'border-radius--border-radius', 
        'box-shadow--main-bg-lilear',
        'background-color--secondary-color',
        'color--main-color',
    )

    return (
        <AtomProvider styles={STYLES}>
            <Button className={className} {...args} />
        </AtomProvider>
    )
}

export const MainButton = Template.bind({})
MainButton.args = {
    style: {
        borderRadius: 10,
        boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.25)',
        backgroundColor: '#F1A739',
        color: 'white',
        fontWeight: 'bold'
    },
    children: 'MainButton'
}