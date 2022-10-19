import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ErrorBoundary from './ErrorBoundary'
import BodyStorybook from '../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../utility/type'
import AtomProviderStorybook from '../../service/component-explorer/AtomProviderStorybook'

export default {
  title: 'Molecule/ErrorBoundary',
  component: ErrorBoundary,
} as ComponentMeta<typeof ErrorBoundary>

const Template: ComponentStory<ComponentPropsStorybook<Required<typeof ErrorBoundary.defaultProps>>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <ErrorBoundary {...args} />
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    theme: 'light',
    error: 'ERROR MESSAGE',
    onReload: () => console.log('PRESSED TO RELOAD'),
    onCancel: () => console.log('PRESSED TO CANCEL'),
}

export const Dark = Template.bind({})
Dark.args = {
    theme: 'dark',
    error: 'ERROR MESSAGE',
    onReload: () => console.log('PRESSED TO RELOAD'),
    onCancel: () => console.log('PRESSED TO CANCEL'),
}