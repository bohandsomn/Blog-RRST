import { useCallback } from 'react'
import { IPostLikesContext } from '../context/post-likes'
import { LikesPostDTO } from '../utility/interface'
import useLukasiewicz from './useLukasiewicz'

const usePostLikes = (postLikes: LikesPostDTO): IPostLikesContext => {
    const {value, handleSetTrue, handleSetFalse, handleSetNull} = useLukasiewicz(postLikes.value)
    const like: IPostLikesContext['like'] = useCallback(() => {
        if (value) {
            handleSetNull()
        } else {
            handleSetTrue()
        }
    }, [value, handleSetTrue, handleSetNull])
    const dislike: IPostLikesContext['dislike'] = useCallback(() => {
        if (value === false) {
            handleSetNull()
        } else {
            handleSetFalse()
        }
    }, [value, handleSetFalse, handleSetNull])

    return {
        data: {...postLikes, value},
        like,
        dislike
    }
}

export default usePostLikes