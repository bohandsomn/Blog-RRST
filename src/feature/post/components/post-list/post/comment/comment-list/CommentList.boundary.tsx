import React, { useContext, useCallback } from 'react'
import ErrorBoundary from '@/components/error-boundary'
import CommentListContext from '../../../../../context/comment-list'
import PostContext from '../../../../../context/post'

const CommentListBoundary: React.FC<Props> = ({ children }) => {
    const postContext = useContext(PostContext)
    const commentListContext = useContext(CommentListContext)
    const onReload = useCallback(() => commentListContext.addMany({
        postId: postContext.id.toString()
    }), [commentListContext.addMany, postContext.id])
    const onCancel = useCallback(() => {
        return commentListContext.onSuccess(commentListContext.previous || [])
    }, [commentListContext.onSuccess, commentListContext.previous])
    
    if (!commentListContext.data && !commentListContext.isLoading) {
        return (
            <ErrorBoundary 
                error={commentListContext.error!} 
                onReload={onReload}
                onCancel={commentListContext.previous !== null ? onCancel : undefined}
            />
        )
    }

    return (
        children
    )
}

type Props = {
    children?: any
}

export default CommentListBoundary