import React from 'react'
import CommentLikesContext from '../context/comment-likes'
import useCommentLikes from '../hooks/useCommentLikes'
import type { LikesCommentDTO } from '../utility/interface'

const CommentLikesProvider: React.FC<Props> = ({ children, commentId }) => {
    const value = useCommentLikes(commentId)
    return (
        <CommentLikesContext.Provider value={value}>
            {children}
        </CommentLikesContext.Provider>
    )
}

type Props = {
    commentId: LikesCommentDTO['commentId']
    children?: any
}

export default CommentLikesProvider