import React from 'react'
import type { LikesPostDTO, LikesPostRequest } from '../utility/interface'

export type IPostLikesContext = {
    data: LikesPostDTO
    like: (data: LikesPostRequest.Like) => void
    dislike: (data: LikesPostRequest.Dislike) => void
}
const PostLikesContext = React.createContext<IPostLikesContext>(undefined!)

export default PostLikesContext