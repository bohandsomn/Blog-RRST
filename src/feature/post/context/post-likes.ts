import React from 'react'
import type { LikesPostDTO, LikesPostRequest } from '../interface'

export type IPostLikesContext = {
    data: LikesPostDTO | null
    like: (data: LikesPostRequest.Like) => void
    dislike: (data: LikesPostRequest.Dislike) => void
}
const PostLikesContext = React.createContext<IPostLikesContext>(undefined!)

export default PostLikesContext