import React, { useContext } from 'react'
import { Li, Ul } from '@/components/atoms'
import PostListContext from '../../context/post-list'
import PostProvider from '../../provider/Post'
import Post from './post'
import UserProvider from '../../provider/User'

const PostList: React.FC = () => {
    const postListContext = useContext(PostListContext)
    return (
        <Ul>
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
    )
}

export default PostList