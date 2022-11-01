import React from 'react'
import CommentLikesContext from '../context/comment-likes'
import useCommentLikes from '../hooks/useCommentLikes'
import type { LikesCommentDTO } from '../interface'

const CommentLikesProvider: React.FC<Props> = ({ children }) => {
    const value = useCommentLikes()
    return (
        <CommentLikesContext.Provider value={value}>
            {children}
        </CommentLikesContext.Provider>
    )
}

type Props = {
    children?: any
}

export default CommentLikesProvider