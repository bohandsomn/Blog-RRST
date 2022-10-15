import React from 'react'
import type { PostDTO, PostRequest } from '../utility/interface'

export type IPostListContext = {
    data: PostDTO[]
    delete: (data: PostRequest.Delete) => Promise<void>
    update: (data: PostRequest.Update) => Promise<void>
}
const PostListContext = React.createContext<IPostListContext>(undefined!)

export default PostListContext