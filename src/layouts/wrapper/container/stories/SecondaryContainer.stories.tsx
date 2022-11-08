import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SecondaryContainer from '../SecondaryContainer'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../../../utility/type'
import AtomProviderStorybook from '../../../../service/component-explorer/AtomProviderStorybook'

export default {
  title: 'Layouts/Container/Secondary',
  component: SecondaryContainer,
} as ComponentMeta<typeof SecondaryContainer>

const Template: ComponentStory<ComponentPropsStorybook<Required<typeof SecondaryContainer.defaultProps>>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <SecondaryContainer {...args} />
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