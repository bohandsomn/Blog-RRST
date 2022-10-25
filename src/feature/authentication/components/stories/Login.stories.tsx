import React from 'react'
import { Provider } from 'react-redux'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Login from '../log-in'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../../../utility/type'
import AtomProviderStorybook from '../../../../service/component-explorer/AtomProviderStorybook'
import store from '../../../../store'

export default {
  title: 'Feature/Login',
  component: Login,
} as ComponentMeta<typeof Login>

const Template: ComponentStory<ComponentPropsStorybook<Required<typeof Login.defaultProps>>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <Provider store={store}>
                <AtomProviderStorybook>
                    <Login />
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