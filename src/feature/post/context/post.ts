import React from 'react'
import type { PostDTO } from '../interface'

export type IPostContext = PostDTO
const PostContext = React.createContext<IPostContext>(undefined!)

export default PostContext