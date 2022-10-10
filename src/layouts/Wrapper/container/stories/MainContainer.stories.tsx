import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MainContainer from '../MainContainer'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../../../utility/type'
import AtomProviderStorybook from '../../../../service/component-explorer/AtomProviderStorybook'

export default {
  title: 'Layouts/Container/Main',
  component: MainContainer,
} as ComponentMeta<typeof MainContainer>

const Template: ComponentStory<ComponentPropsStorybook<Required<typeof MainContainer.defaultProps>>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <MainContainer {...args} />
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