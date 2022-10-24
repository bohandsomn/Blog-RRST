import React from 'react'
import type { CommentDTO, UserDTO } from '../utility/interface'

export type ICommentContext = {
    data: CommentDTO
    user: UserDTO | null
}
const CommentContext = React.createContext<ICommentContext | undefined>(undefined)

export default CommentContext