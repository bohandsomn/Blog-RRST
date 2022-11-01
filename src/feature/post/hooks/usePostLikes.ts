import { useCallback, useContext, useEffect } from 'react'
import useAppSelector from '../../../hooks/useAppSelector'
import useFetch from '../../../hooks/useFetch'
import { authorizationSelector } from '../../../store'
import { likesPostApi } from '../api'
import PostContext from '../context/post'
import { IPostLikesContext } from '../context/post-likes'
import { LikesPostDTO } from '../interface'

const usePostLikes = (): IPostLikesContext => {
    const { data, onSuccess, onReject, onPending } = useFetch<LikesPostDTO>()
    const postContext = useContext(PostContext)
    const user = useAppSelector(authorizationSelector)

    useEffect(() => {
        const handleFetch = async () => {
            if (user.data === null) {
                return
            }

            onPending()
            const postLikes = await likesPostApi.getLike({
                postId: postContext.id.toString(),
                userId: user.data?.id.toString()
            })
            if (postLikes.data) {
                onSuccess(postLikes.data)
            } else {
                onReject(postLikes.message)
            }
        }
        handleFetch()
    }, [user.data?.id])

    const like: IPostLikesContext['like'] = useCallback(async () => {
        const callback = data?.value === true
            ? likesPostApi.unlike.bind(likesPostApi)
            : likesPostApi.like.bind(likesPostApi)
        onPending()
        const postLikes = await callback({ postId: postContext.id.toString() })
        if (postLikes.data) {
            onSuccess(postLikes.data)
        } else {
            onReject(postLikes.message)
        }
    }, [data?.value, onPending, postContext.id, onSuccess, onReject])

    const dislike: IPostLikesContext['dislike'] = useCallback(async () => {
        const callback = data?.value === false
            ? likesPostApi.unlike.bind(likesPostApi)
            : likesPostApi.dislike.bind(likesPostApi)
        onPending()
        const postLikes = await callback({ postId: postContext.id.toString() })
        if (postLikes.data) {
            onSuccess(postLikes.data)
        } else {
            onReject(postLikes.message)
        }
    }, [data?.value, onPending, postContext.id, onSuccess, onReject])

    return {
        data,
        like,
        dislike
    }
}

export default usePostLikes