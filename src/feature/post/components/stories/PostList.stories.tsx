import React, { useEffect, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PostList from '..'
import BodyStorybook from '../../../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook, ErrorResponse } from '../../../../utility/type'
import AtomProviderStorybook from '../../../../service/component-explorer/AtomProviderStorybook'
import { postsMock } from '../../__mock__'
import { PostListProvider, PostListBoundary, postNotifier } from '../..'
import PostResponse from '../../../../store/post/api/response'

export default {
  title: 'Feature/PostList',
  component: PostList,
} as ComponentMeta<typeof PostList>

const Template: ComponentStory<ComponentPropsStorybook<Required<typeof PostList.defaultProps>>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                <PostListProvider posts={{message: 'ERROR MESSAGE'}}>
                    <PostListBoundary>
                        <PostList {...args} />
                    </PostListBoundary>
                </PostListProvider>
            </AtomProviderStorybook>
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