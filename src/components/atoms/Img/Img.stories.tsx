import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Img } from './Img'
import BodyStorybook from '../../../service/component-explorer/BodyStorybook'
import AtomProviderStorybook from '../../../service/component-explorer/AtomProviderStorybook'
import useAppStyles from '../../../hooks/useAppStyles'

export default {
  title: 'Atom/Img',
  component: Img,
} as ComponentMeta<typeof Img>

const Template: ComponentStory<typeof Img> = (args) => {
    const className = useAppStyles('border-radius-50%', 'background-color-button-shadow')
    return (
        <BodyStorybook theme="light">
            <AtomProviderStorybook>
                <Img className={className} {...args} />
            </AtomProviderStorybook>
        </BodyStorybook>
    )
}

export const Original = Template.bind({})
Original.args = {
    width: 200,
    height: 200,
}

export const Post = Template.bind({})
Post.args = {
    width: 75,
    height: 75,
}

export const Preview = Template.bind({})
Preview.args = {
    width: 60,
    height: 60,
}

export const Message = Template.bind({})
Message.args = {
    width: 20,
    height: 20,
}