import React, { useContext } from 'react'
import { Div, PostImg } from '../../../../../../components/atoms'
import WithPhoto from '../../../../../../components/with-photo'
import useAppQuery from '../../../../../../hooks/useAppQuery'
import PostContext from '../../../../context/post'
import PostContent from './post-content'
import PostSettings from './post-settings'

const PostData: React.FC = () => {
    const query = useAppQuery('post')
    const postContext = useContext(PostContext)

    return (
        <Div query={query}>
            <WithPhoto img={
                <PostImg src={
                    `${process.env.NEXT_PUBLIC_BASE_URL}photo/user/post/${postContext.userId}`
                } />
            }>
                <PostContent />
            </WithPhoto>
            <PostSettings />
        </Div>
    )
}

export default PostData