import React, { useContext } from 'react'
import { Div } from '../../../../components/atoms'
import { VerticalDescription } from '../../../../components/description'
import useAppQuery from '../../../../hooks/useAppQuery'
import CommentContext from '../../context/comment'
import CommentLikesProvider from '../../provider/CommentLikes'
import CommentLikes from '../comment-likes'

const PostContent: React.FC = () => {
    const query = useAppQuery('comment__content')
    const commentContext = useContext(CommentContext)
    
    return (
        <Div query={query}>
            <VerticalDescription 
                header={`${commentContext.user.name} ${commentContext.user.surname || ''}`} 
                text={commentContext.data.content}
            />
            <CommentLikesProvider commentId={commentContext.data.id}>
                <CommentLikes />
            </CommentLikesProvider>
        </Div>
    )
}

export default PostContent