import React, { useContext } from 'react'
import { Div } from '../../../../../../../../../components/atoms'
import { VerticalDescription } from '../../../../../../../../../components/description'
import useAppQuery from '../../../../../../../../../hooks/useAppQuery'
import CommentContext from '../../../../../../../context/comment'
import UpdateToggle from '../../../../../../../context/update-toggle'
import CommentLikesProvider from '../../../../../../../provider/CommentLikes'
import CommentUpdate from '../comment-update'
import CommentLikes from './comment-likes'

const PostContent: React.FC = () => {
    const query = useAppQuery('comment__content')
    const commentContext = useContext(CommentContext)
    const { value } = useContext(UpdateToggle)

    if (value) {
        return <CommentUpdate />
    }
    
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