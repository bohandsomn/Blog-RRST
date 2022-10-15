import React from 'react'
import PostLikesContext from '../context/post-likes'
import usePostLikes from '../hooks/usePostLikes'
import type { LikesPostDTO } from '../utility/interface'

const PostLikesProvider: React.FC<Props> = ({ children, postLikes }) => {
    const value = usePostLikes(postLikes)
    return (
        <PostLikesContext.Provider value={value}>
            {children}
        </PostLikesContext.Provider>
    )
}

type Props = {
    postLikes: LikesPostDTO
    children?: any
}

export default PostLikesProvider