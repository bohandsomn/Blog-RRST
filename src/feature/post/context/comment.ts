import React from 'react'
import type { CommentDTO, UserDTO } from '../interface'

export type ICommentContext = {
    data: CommentDTO
    user: UserDTO | null
}
const CommentContext = React.createContext<ICommentContext | undefined>(undefined)

export default CommentContext