import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Img from './Img'
import AtomProvider from '../../../packages/atom/Provider'
import STYLES from '../../../styles'

export default {
  title: 'Atom/Img',
  component: Img,
} as ComponentMeta<typeof Img>

const Template: ComponentStory<typeof Img> = (args) => {
    const classNameList: (keyof typeof STYLES)[] = ['border-radius-50%', 'background-color-button-shadow']
    return (
        <AtomProvider styles={STYLES}>
            <Img className={classNameList.join(' ')} {...args} />
        </AtomProvider>
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