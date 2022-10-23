import React from 'react'
import { ErrorResponse } from 'src/utility/type'
import PostListContext from '../context/post-list'
import usePostList from '../hooks/usePostList'
import type PostResponse from '../../../store/post/api/response'

const PostListProvider: React.FC<Props> = ({ children, posts }) => {
    const value = usePostList(posts)

    return (
        <PostListContext.Provider value={value}>
            {children}
        </PostListContext.Provider>
    )
}

type Props = {
    posts: ErrorResponse | PostResponse.GetMany
    children?: any
}

export default PostListProvider