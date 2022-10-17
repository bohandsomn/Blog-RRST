import React from 'react'
import type { CommentDTO, CommentRequest } from '../utility/interface'

export type ICommentListContext = {
    create: (data: CommentRequest.Create) => Promise<void>
    update: (data: CommentRequest.Update) => Promise<void>
    delete: (data: CommentRequest.Delete) => Promise<void>
    data: CommentDTO[]
}
const CommentListContext = React.createContext<ICommentListContext>(undefined!)

export default CommentListContext