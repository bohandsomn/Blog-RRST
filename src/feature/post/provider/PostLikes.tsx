import React from 'react'
import PostLikesContext from '../context/post-likes'
import usePostLikes from '../hooks/usePostLikes'

const PostLikesProvider: React.FC<Props> = ({ children }) => {
    const value = usePostLikes()
    return (
        <PostLikesContext.Provider value={value}>
            {children}
        </PostLikesContext.Provider>
    )
}

type Props = {
    children?: any
}

export default PostLikesProvider