import React, { useContext } from 'react'
import { Div, MainParagraph } from '../../../../components/atoms'
import { MainDescription } from '../../../../components/description'
import useAppQuery from '../../../../hooks/useAppQuery'
import PostContext from '../../context/post'
import PostLikesProvider from '../../provider/PostLikes'
import { postLikesMock } from '../../__mock__'
import PostLikes from '../post-likes'

const PostContent: React.FC = () => {
    const query = useAppQuery('post__content')
    const postContext = useContext(PostContext)
    
    return (
        <Div query={query}>
            <MainDescription 
                header={postContext.title} 
                text={'Name Surname'} 
                time={
                    postContext.createdAt === postContext.updatedAt
                        ? `Created ${postContext.createdAt}`
                        : `Updated ${postContext.updatedAt}`
                } 
            />
            <MainParagraph>
                {postContext.content}
            </MainParagraph>
            <PostLikesProvider postLikes={postLikesMock}>
                <PostLikes />
            </PostLikesProvider>
        </Div>
    )
}

export default PostContent