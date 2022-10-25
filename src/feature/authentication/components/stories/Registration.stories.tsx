import React from 'react'
import { Provider } from 'react-redux'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Registration from '../registration'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../../../utility/type'
import AtomProviderStorybook from '../../../../service/component-explorer/AtomProviderStorybook'
import store from '../../../../store'

export default {
  title: 'Feature/Registration',
  component: Registration,
} as ComponentMeta<typeof Registration>

const Template: ComponentStory<ComponentPropsStorybook<Required<typeof Registration.defaultProps>>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <Provider store={store}>
                <AtomProviderStorybook>
                    <Registration />
                </AtomProviderStorybook>
            </Provider>
        </BodyStorybook>
    )
}

export const Light = Template.bind({})
Light.args = {
    theme: 'light'
}

export const Dark = Template.bind({})
Dark.args = {
    theme: 'dark'
}