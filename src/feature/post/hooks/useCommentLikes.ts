import { useCallback } from 'react'
import useLukasiewicz from './useLukasiewicz'
import type { ICommentLikesContext } from '../context/comment-likes'
import type { LikesCommentDTO } from '../utility/interface'
import { commentLikesMock } from '../__mock__'

const useCommentLikes = (commentId: LikesCommentDTO['commentId']): ICommentLikesContext => {
    const {value, handleSetTrue, handleSetFalse, handleSetNull} = useLukasiewicz(commentLikesMock.value)
    const like: ICommentLikesContext['like'] = useCallback(() => {
        if (value) {
            handleSetNull()
        } else {
            handleSetTrue()
        }
    }, [value, handleSetTrue, handleSetNull])
    const dislike: ICommentLikesContext['dislike'] = useCallback(() => {
        if (value === false) {
            handleSetNull()
        } else {
            handleSetFalse()
        }
    }, [value, handleSetFalse, handleSetNull])

    return {
        data: {...commentLikesMock, value},
        like,
        dislike
    }
}

export default useCommentLikes