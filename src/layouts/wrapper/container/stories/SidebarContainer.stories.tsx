import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SidebarContainer from '../SidebarContainer'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../../../utility/type'
import AtomProviderStorybook from '../../../../service/component-explorer/AtomProviderStorybook'

export default {
  title: 'Layouts/Container/Sidebar',
  component: SidebarContainer,
} as ComponentMeta<typeof SidebarContainer>

const Template: ComponentStory<ComponentPropsStorybook<Required<typeof SidebarContainer.defaultProps>>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <SidebarContainer {...args} />
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    theme: 'light',
    children: 'CHILDREN'
}

export const Dark = Template.bind({})
Dark.args = {
    theme: 'dark',
    children: 'CHILDREN'
}