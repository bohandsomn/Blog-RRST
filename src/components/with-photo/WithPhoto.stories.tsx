import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import WithPhoto from './WithPhoto'
import BodyStorybook from '../../service/component-explorer/BodyStorybook'
import { ComponentPropsStorybook } from '../../utility/type'
import AtomProviderStorybook from '../../service/component-explorer/AtomProviderStorybook'
import { OriginalImg, PostImg, PreviewImg, MessageImg } from '../atoms'

export default {
  title: 'Molecule/WithPhoto',
  component: WithPhoto,
} as ComponentMeta<typeof WithPhoto>

const Template: ComponentStory<ComponentPropsStorybook<Required<typeof WithPhoto.defaultProps>>> = ({theme, ...args}) => {
    return (
        <BodyStorybook theme={theme}>
            <AtomProviderStorybook>
                    <WithPhoto {...args}>

                    </WithPhoto>
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Original = Template.bind({})
Original.args = {
    theme: 'light',
    img: <OriginalImg />,
    children: 'Original'
}

export const Post = Template.bind({})
Post.args = {
    theme: 'light',
    img: <PostImg />,
    children: 'Post'
}

export const Preview = Template.bind({})
Preview.args = {
    theme: 'light',
    img: <PreviewImg />,
    children: 'Preview'
}

export const Message = Template.bind({})
Message.args = {
    theme: 'light',
    img: <MessageImg />,
    children: 'Message'
}