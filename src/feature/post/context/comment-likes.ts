import React from 'react'
import type { LikesCommentDTO, LikesCommentRequest } from '../interface'

export type ICommentLikesContext = {
    data: LikesCommentDTO | null
    like: (data: LikesCommentRequest.Like) => void
    dislike: (data: LikesCommentRequest.Dislike) => void
}
const CommentLikesContext = React.createContext<ICommentLikesContext | undefined>(undefined)

export default CommentLikesContext