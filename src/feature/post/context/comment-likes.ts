import React from 'react'
import type { LikesCommentDTO, LikesCommentRequest } from '../utility/interface'

export type ICommentLikesContext = {
    data: LikesCommentDTO
    like: (data: LikesCommentRequest.Like) => void
    dislike: (data: LikesCommentRequest.Dislike) => void
}
const CommentLikesContext = React.createContext<ICommentLikesContext | undefined>(undefined)

export default CommentLikesContext