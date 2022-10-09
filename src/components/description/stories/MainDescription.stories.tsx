import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MainDescription from '../MainDescription'
import BodyStorybook from '../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../../utility/type'
import AtomProviderStorybook from '../../../service/component-explorer/AtomProviderStorybook'

export default {
  title: 'Molecule/Description/Main',
  component: MainDescription,
} as ComponentMeta<typeof MainDescription>

const Template: ComponentStory<ComponentPropsStorybook<Required<typeof MainDescription.defaultProps>>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <MainDescription {...args} />
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    theme: 'light',
    header: 'HEADER',
    text: 'TEXT',
    time: 'Created 10/10/1010'
}

export const Dark = Template.bind({})
Dark.args = {
    theme: 'dark',
    header: 'HEADER',
    text: 'TEXT',
    time: 'Created 10/10/1010'
}