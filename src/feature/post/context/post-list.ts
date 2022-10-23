import React from 'react'
import { UseFetchReturned } from '../../../hooks/useFetch/interface'
import type { PostDTO, PostRequest } from '../utility/interface'

export type IPostListContext = UseFetchReturned<PostDTO[]> & {
    delete: (data: PostRequest.Delete) => Promise<void>
    update: (data: PostRequest.Update) => Promise<void>
    addMany: (data: PostRequest.GetMany) => Promise<void>
}
const PostListContext = React.createContext<IPostListContext>(undefined!)

export default PostListContext