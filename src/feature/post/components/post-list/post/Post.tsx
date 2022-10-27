import React from 'react'
import { SecondaryBackground } from '../../../../../layouts/wrapper'
import UpdateToggleProvider from '../../../provider/UpdateToggle'
import Comment from './comment'
import PostData from './post-data'

const Post: React.FC = () => {
    return (
        <SecondaryBackground>
            <UpdateToggleProvider>
                <PostData />
            </UpdateToggleProvider>
            <Comment />
        </SecondaryBackground>
    )
}

export default Post