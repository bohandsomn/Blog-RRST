import React, { useContext } from 'react'
import { Div, PostImg } from '@/components/atoms'
import WithPhoto from '@/components/with-photo'
import useAppQuery from '../../../../../../hooks/useAppQuery'
import PostContext from '../../../../context/post'
import UpdateToggle from '../../../../context/update-toggle'
import PostUpdate from '../post-update'
import PostContent from './post-content'
import PostSettings from './post-settings'

const PostData: React.FC = () => {
    const query = useAppQuery('post')
    const postContext = useContext(PostContext)
    const {value} = useContext(UpdateToggle)

    if (value) {
        return <PostUpdate />
    }

    return (
        <Div query={query}>
            <WithPhoto img={
                <PostImg 
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}photo/user/post/${postContext.userId}`}  
                    alt={`User-${postContext.userId}`}
                    title={'User photo'}
                />
            }>
                <PostContent />
            </WithPhoto>
            <PostSettings />
        </Div>
    )
}

export default PostData