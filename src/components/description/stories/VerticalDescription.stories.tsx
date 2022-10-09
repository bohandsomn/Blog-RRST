import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import VerticalDescription from '../VerticalDescription'
import BodyStorybook from '../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../../utility/type'
import AtomProviderStorybook from '../../../service/component-explorer/AtomProviderStorybook'

export default {
  title: 'Molecule/Description/Vertical',
  component: VerticalDescription,
} as ComponentMeta<typeof VerticalDescription>

const Template: ComponentStory<ComponentPropsStorybook<Required<typeof VerticalDescription.defaultProps>>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <VerticalDescription {...args} />
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    theme: 'light',
    header: 'HEADER',
    text: 'TEXT'
}

export const Dark = Template.bind({})
Dark.args = {
    theme: 'dark',
    header: 'HEADER',
    text: 'TEXT'
}