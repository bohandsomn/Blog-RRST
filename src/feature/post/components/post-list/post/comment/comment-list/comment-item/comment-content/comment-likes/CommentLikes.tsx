import React, { useCallback, useContext } from 'react'
import { Div } from '@/components/atoms'
import { Dislike, Like } from '@/components/likes'
import useAppQuery from '../../../../../../../../../../hooks/useAppQuery'
import CommentLikesContext from '../../../../../../../../context/comment-likes'

const CommentLikes: React.FC = () => {
    const query = useAppQuery('comment__likes')
    const commentLikesContext = useContext(CommentLikesContext)

    const handleLike = useCallback(() => {
        if (!commentLikesContext?.data?.commentId) {
            return
        }
        return commentLikesContext?.like({commentId: commentLikesContext?.data?.commentId.toString()})
    }, [commentLikesContext?.like, commentLikesContext?.data?.commentId])
    const handleDisike = useCallback(() => {
        if (!commentLikesContext?.data?.commentId) {
            return
        }
        return commentLikesContext?.dislike({commentId: commentLikesContext?.data?.commentId.toString()})
    }, [commentLikesContext?.dislike, commentLikesContext?.data?.commentId])

    return (
        <Div query={query}>
            <Like 
                onClick={handleLike} 
                fill={commentLikesContext?.data?.value ? 'var(--main-color)' : undefined} 
            />
            <Dislike 
                onClick={handleDisike} 
                fill={commentLikesContext?.data?.value === false ? 'var(--main-color)' : undefined} 
            />
        </Div>
    )
}

export default CommentLikes