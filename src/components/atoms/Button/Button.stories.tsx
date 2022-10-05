import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'
import useAppStyles from '../../../hooks/useAppStyles'
import BodyStorybook from '../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../../utility/type'
import AtomProviderStorybook from '../../../service/component-explorer/AtomProviderStorybook'

export default {
  title: 'Atom/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<ComponentPropsStorybook<typeof Button.defaultProps>> = ({theme, ...args}) => {
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
        'cursor-pointer'
    )

    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <Button className={className} {...args} />
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    children: 'Light',
    theme: 'light'
}

export const Dark = Template.bind({})
Dark.args = {
    children: 'Dark',
    theme: 'dark'
}