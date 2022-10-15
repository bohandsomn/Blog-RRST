import React from 'react'
import CommentListContext from '../context/comment-list'
import useCommentList from '../hooks/useCommentList'
import type { CommentDTO } from '../utility/interface'

const CommentListProvider: React.FC<Props> = ({ children, comments }) => {
    const value = useCommentList(comments)

    return (
        <CommentListContext.Provider value={value}>
            {children}
        </CommentListContext.Provider>
    )
}

type Props = {
    comments: CommentDTO[]
    children?: any
}

export default CommentListProvider