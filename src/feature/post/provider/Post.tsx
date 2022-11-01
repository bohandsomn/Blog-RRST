import React from 'react'
import PostContext from '../context/post'
import type { PostDTO } from '../interface'

const PostProvider: React.FC<Props> = ({ children, post }) => {
    return (
        <PostContext.Provider value={post}>
            {children}
        </PostContext.Provider>
    )
}

type Props = {
    post: PostDTO
    children?: any
}

export default PostProvider