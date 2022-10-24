import React, { useContext } from 'react'
import { Div, MainParagraph } from '@/components/atoms'
import { MainDescription } from '@/components/description'
import useAppQuery from '../../../../../../../hooks/useAppQuery'
import PostContext from '../../../../../context/post'
import UserContext from '../../../../../../post/context/user'
import PostLikesProvider from '../../../../../provider/PostLikes'
import PostLikes from './post-likes'
import { useTranslation } from '../../../../../../internationalization'

const PostContent: React.FC = () => {
    const query = useAppQuery('post__content')
    const postContext = useContext(PostContext)
    const user = useContext(UserContext)
    const {translation} = useTranslation()
    
    return (
        <Div query={query}>
            <MainDescription 
                header={postContext.title} 
                text={`${user.data?.name || ''} ${user.data?.surname || ''}`} 
                time={
                    postContext.createdAt === postContext.updatedAt
                        ? `${translation.feature.post['post-data']['post-content'].time.created} ${postContext.createdAt}`
                        : `${translation.feature.post['post-data']['post-content'].time.updated} ${postContext.updatedAt}`
                } 
            />
            <MainParagraph>
                {postContext.content}
            </MainParagraph>
            <PostLikesProvider>
                <PostLikes />
            </PostLikesProvider>
        </Div>
    )
}

export default PostContent