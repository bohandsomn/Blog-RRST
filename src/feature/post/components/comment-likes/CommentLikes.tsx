import React, { useCallback, useContext } from 'react'
import { Div } from '../../../../components/atoms'
import { Dislike, Like } from '../../../../components/likes'
import useAppQuery from '../../../../hooks/useAppQuery'
import CommentContext from '../../context/comment'
import CommentLikesContext from '../../context/comment-likes'
import UserContext from '../../context/user'

const CommentLikes: React.FC = () => {
    const query = useAppQuery('comment__likes')
    const {data, like, dislike} = useContext(CommentLikesContext)

    const handleLike = useCallback(() => like({commentId: data.commentId.toString()}), [like, data.commentId])
    const handleDisike = useCallback(() => dislike({commentId: data.commentId.toString()}), [dislike, data.commentId])

    return (
        <Div query={query}>
            <Like 
                onClick={handleLike} 
                fill={data.value ? 'var(--main-color)' : undefined} 
            />
            <Dislike 
                onClick={handleDisike} 
                fill={data.value === false ? 'var(--main-color)' : undefined} 
            />
        </Div>
    )
}

export default CommentLikes