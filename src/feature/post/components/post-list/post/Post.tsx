import React from 'react'
import { SecondaryBackground, SecondaryContainer } from '../../../../../layouts/wrapper'
import UpdateToggleProvider from '../../../provider/UpdateToggle'
import Comment from './comment'
import PostData from './post-data'

const Post: React.FC = () => {
    return (
        <SecondaryContainer>
            <SecondaryBackground>
                <UpdateToggleProvider>
                    <PostData />
                </UpdateToggleProvider>
                <Comment />
            </SecondaryBackground>
        </SecondaryContainer>
    )
}

export default Post