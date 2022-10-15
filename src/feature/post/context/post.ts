import React from 'react'
import type { PostDTO } from '../utility/interface'

export type IPostContext = PostDTO
const PostContext = React.createContext<IPostContext>(undefined!)

export default PostContext