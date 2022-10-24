import React, { useContext } from 'react'
import { Div, PostImg } from '@/components/atoms'
import WithPhoto from '@/components/with-photo'
import useAppQuery from '../../../../../../hooks/useAppQuery'
import PostContext from '../../../../context/post'
import UserContext from '../../../../context/user'
import UpdateToggle from '../../../../context/update-toggle'
import PostUpdate from '../post-update'
import PostContent from './post-content'
import PostSettings from './post-settings'
import { useTranslation } from '../../../../../internationalization'

const PostData: React.FC = () => {
    const query = useAppQuery('post')
    const postContext = useContext(PostContext)
    const userContext = useContext(UserContext)
    const {value} = useContext(UpdateToggle)
    const {translation} = useTranslation()

    if (value) {
        return <PostUpdate />
    }

    return (
        <Div query={query}>
            <WithPhoto img={
                <PostImg 
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}photo/user/post/${postContext.userId}`} 
                    alt={`${userContext.data?.name || ''} ${userContext.data?.surname || ''}`}
                    title={translation.feature.post['post-update'].photo.title}
                />
            }>
                <PostContent />
            </WithPhoto>
            <PostSettings />
        </Div>
    )
}

export default PostData