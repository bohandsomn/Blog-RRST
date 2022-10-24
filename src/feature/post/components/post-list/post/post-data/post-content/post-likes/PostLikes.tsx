import React, { useCallback, useContext } from 'react'
import { Div } from '@/components/atoms'
import { Dislike, Like } from '@/components/likes'
import useAppQuery from '../../../../../../../../hooks/useAppQuery'
import PostContext from '../../../../../../context/post'
import PostLikesContext from '../../../../../../context/post-likes'

const PostLikes: React.FC = () => {
    const query = useAppQuery('post__likes')
    const {data, like, dislike} = useContext(PostLikesContext)
    const {id} = useContext(PostContext)

    const handleLike = useCallback(() => like({postId: id.toString()}), [like, id])
    const handleDisike = useCallback(() => dislike({postId: id.toString()}), [dislike, id])

    return (
        <Div query={query}>
            <Like 
                onClick={handleLike} 
                fill={data?.value ? 'var(--main-color)' : undefined} 
            />
            <Dislike 
                onClick={handleDisike} 
                fill={data?.value === false ? 'var(--main-color)' : undefined} 
            />
        </Div>
    )
}

export default PostLikes