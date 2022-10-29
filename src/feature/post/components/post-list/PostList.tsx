import React, { useContext } from 'react'
import { Li, Ul } from '@/components/atoms'
import PostListContext from '../../context/post-list'
import PostProvider from '../../provider/Post'
import Post from './post'
import UserProvider from '../../provider/User'
import useAppQuery from '../../../../hooks/useAppQuery'
import CurrentSettingListProvider from '../../provider/CurrentSettingList'

const PostList: React.FC = () => {
    const postListContext = useContext(PostListContext)
    const query = useAppQuery('post-list')
    
    return (
        <CurrentSettingListProvider>
            <Ul query={query}>
                {
                    postListContext.data?.map((post) => (
                        <Li key={post.id}>
                            <UserProvider userId={post.userId}>
                                <PostProvider post={post}>
                                    <Post />
                                </PostProvider>
                            </UserProvider>
                        </Li>
                    ))
                }
            </Ul>
        </CurrentSettingListProvider>
    )
}

export default PostList