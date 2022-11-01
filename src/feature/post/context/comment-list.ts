import React from 'react'
import { UseFetchReturned } from '../../../hooks/useFetch/interface'
import type { CommentDTO, CommentRequest } from '../interface'

export type ICommentListContext = UseFetchReturned<CommentDTO[]> & {
    create: (data: CommentRequest.Create) => Promise<void>
    update: (data: CommentRequest.Update) => Promise<void>
    delete: (data: CommentRequest.Delete) => Promise<void>
    addMany: (data: CommentRequest.GetMany) => Promise<void>
}
const CommentListContext = React.createContext<ICommentListContext>(undefined!)

export default CommentListContext