import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TwentyIndent } from '../TwentyIndent'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../../../utility/type'
import AtomProviderStorybook from '../../../../service/component-explorer/AtomProviderStorybook'
import { Account } from '../../../../components/atoms'
import ToggleProvider from '../../../../provider/toggle'

export default {
  title: 'Layouts/Indent/Twenty',
  component: TwentyIndent,
} as ComponentMeta<typeof TwentyIndent>

const Template: ComponentStory<ComponentPropsStorybook<typeof TwentyIndent.defaultProps>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <ToggleProvider>
                    <TwentyIndent {...args} />
                </ToggleProvider>
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const TopDark = Template.bind({})
TopDark.args = {
    children: 'TopDark',
    theme: 'dark',
    top: <Account />
}

export const BottomDark = Template.bind({})
BottomDark.args = {
    children: 'BottomDark',
    theme: 'dark',
    bottom: <Account />
}

export const TopLight = Template.bind({})
TopLight.args = {
    children: 'TopLight',
    theme: 'light',
    top: <Account />
}

export const BottomLight = Template.bind({})
BottomLight.args = {
    children: 'BottomLight',
    theme: 'light',
    bottom: <Account />
}

export const RightDark = Template.bind({})
RightDark.args = {
    children: 'RightDark',
    theme: 'dark',
    right: <Account />
}

export const LeftDark = Template.bind({})
LeftDark.args = {
    children: 'LeftDark',
    theme: 'dark',
    left: <Account />
}

export const RightLight = Template.bind({})
RightLight.args = {
    children: 'RightLight',
    theme: 'light',
    right: <Account />
}

export const LeftLight = Template.bind({})
LeftLight.args = {
    children: 'LeftLight',
    theme: 'light',
    left: <Account />
}