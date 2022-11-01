import React, { useContext, useMemo } from 'react'
import CommentContext, { ICommentContext } from '../context/comment'
import UserContext from '../context/user'
import type { CommentDTO } from '../interface'

const CommentProvider: React.FC<Props> = ({ children, comment }) => {
    const user = useContext(UserContext).data
    const value: ICommentContext = useMemo(() => ({
        data: comment,
        user
    }), [comment, user])

    return (
        <CommentContext.Provider value={value}>
            {children}
        </CommentContext.Provider>
    )
}

type Props = {
    comment: CommentDTO
    children?: any
}

export default CommentProvider