import React from 'react'
import CommentListContext from '../context/comment-list'
import useCommentList from '../hooks/useCommentList'

const CommentListProvider: React.FC<Props> = ({ children }) => {
    const value = useCommentList()

    return (
        <CommentListContext.Provider value={value}>
            {children}
        </CommentListContext.Provider>
    )
}

type Props = {
    children?: any
}

export default CommentListProvider