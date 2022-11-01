import { useCallback, useContext, useEffect } from 'react'
import type { ICommentLikesContext } from '../context/comment-likes'
import type { LikesCommentDTO } from '../interface'
import useFetch from '../../../hooks/useFetch'
import CommentContext from '../context/comment'
import useAppSelector from '../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../store'
import { likesCommentApi } from '../api'

const useCommentLikes = (): ICommentLikesContext => {
    const { data, onSuccess, onReject, onPending } = useFetch<LikesCommentDTO>()
    const commentContext = useContext(CommentContext)
    const user = useAppSelector(authorizationSelector)

    useEffect(() => {
        const handleFetch = async () => {
            if (user.data === null || !commentContext) {
                return
            }

            onPending()
            const commentLikes = await likesCommentApi.getLike({
                commentId: commentContext.data.id.toString(),
                userId: user.data.id.toString()
            })
            if (commentLikes.data) {
                onSuccess(commentLikes.data)
            } else {
                onReject(commentLikes.message)
            }
        }
        handleFetch()
    }, [user.data?.id])

    const like: ICommentLikesContext['like'] = useCallback(async () => {
        if (!commentContext) {
            return
        }

        const callback = data?.value === true
            ? likesCommentApi.unlike.bind(likesCommentApi)
            : likesCommentApi.like.bind(likesCommentApi)
        onPending()
        const commentLikes = await callback({ commentId: commentContext?.data.id.toString() })
        if (commentLikes.data) {
            onSuccess(commentLikes.data)
        } else {
            onReject(commentLikes.message)
        }
    }, [data?.value, onPending, commentContext?.data.id, onSuccess, onReject])

    const dislike: ICommentLikesContext['dislike'] = useCallback(async () => {
        if (!commentContext) {
            return
        }

        const callback = data?.value === false
            ? likesCommentApi.unlike.bind(likesCommentApi)
            : likesCommentApi.dislike.bind(likesCommentApi)
        onPending()
        const commentLikes = await callback({ commentId: commentContext?.data.id.toString() })
        if (commentLikes.data) {
            onSuccess(commentLikes.data)
        } else {
            onReject(commentLikes.message)
        }
    }, [data?.value, onPending, commentContext?.data.id, onSuccess, onReject])

    return {
        data,
        like,
        dislike
    }
}

export default useCommentLikes