import React, { useContext } from 'react'
import { Li, Ul } from '../../../../components/atoms'
import PostListContext from '../../context/post-list'
import PostProvider from '../../provider/Post'
import Post from './post'

const PostList: React.FC = () => {
    const postListContext = useContext(PostListContext)
    return (
        <Ul>
            {
                postListContext.data.map((post) => (
                    <Li key={post.id}>
                        <PostProvider post={post}>
                            <Post />
                        </PostProvider>
                    </Li>
                ))
            }
        </Ul>
    )
}

export default PostList