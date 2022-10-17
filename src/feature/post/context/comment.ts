import React from 'react'
import type { CommentDTO, UserDTO } from '../utility/interface'

export type ICommentContext = {
    data: CommentDTO
    user: UserDTO
}
const CommentContext = React.createContext<ICommentContext>(undefined!)

export default CommentContext