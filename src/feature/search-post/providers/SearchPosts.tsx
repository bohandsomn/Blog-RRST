import React from 'react'
import { ErrorResponse } from 'src/utility/type'
import { PostListProvider } from '../../post'
import { PostResponse } from '../interface'

const SearchPostsProvider: React.FC<Props> = ({ children, posts }) => {
    return (
        <PostListProvider posts={posts}>
            {children}
        </PostListProvider>
    )
}

type Props = {
    children?: any
    posts: ErrorResponse | PostResponse.GetMany
}

export default SearchPostsProvider