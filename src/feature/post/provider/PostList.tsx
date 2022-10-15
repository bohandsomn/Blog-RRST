import React from 'react'
import PostListContext from '../context/post-list'
import usePostList from '../hooks/usePostList'
import type { PostDTO } from '../utility/interface'

const PostListProvider: React.FC<Props> = ({ children, posts }) => {
    const value = usePostList(posts)

    return (
        <PostListContext.Provider value={value}>
            {children}
        </PostListContext.Provider>
    )
}

type Props = {
    posts: PostDTO[]
    children?: any
}

export default PostListProvider