import React from 'react'
import { UseFetchReturned } from 'src/hooks/useFetch/interface'
import type { CommentDTO, CommentRequest } from '../utility/interface'

export type ICommentListContext = UseFetchReturned<CommentDTO[]> & {
    create: (data: CommentRequest.Create) => Promise<void>
    update: (data: CommentRequest.Update) => Promise<void>
    delete: (data: CommentRequest.Delete) => Promise<void>
    addMany: (data: CommentRequest.GetMany) => Promise<void>
}
const CommentListContext = React.createContext<ICommentListContext>(undefined!)

export default CommentListContext