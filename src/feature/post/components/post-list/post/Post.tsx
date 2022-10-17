import React from 'react'
import { SecondaryBackground, SecondaryContainer } from '../../../../../layouts/wrapper'
import ToggleProvider from '../../../../../provider/toggle'
import Comment from './comment'
import PostData from './post-data'

const Post: React.FC = () => {
    return (
        <SecondaryContainer>
            <SecondaryBackground>
                <ToggleProvider>
                    <PostData />
                </ToggleProvider>
                <Comment />
            </SecondaryBackground>
        </SecondaryContainer>
    )
}

export default Post