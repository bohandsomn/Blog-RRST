import { useCallback, useContext } from 'react'
import useInput from '../../../hooks/useInput'
import CommentListContext from '../context/comment-list'
import PostContext from '../context/post'
import useValidField from '../../../hooks/useValidField'

const useCreateComment = () => {
    const [comment, handleChangeComment, handleReset] = useInput('')
    const [isValid, handleSetIsFocusedTrue, handleSetIsFocusedFalse] = useValidField(comment)
    const {create} = useContext(CommentListContext)
    const postContext = useContext(PostContext)
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(async (event) => {
        event.preventDefault()
        await create({
            postId: postContext.id.toString(),
            content: comment
        })
        handleReset()
        handleSetIsFocusedFalse()
    }, [create, postContext, comment, handleReset, handleSetIsFocusedFalse])

    return {
        comment, 
        handleChangeComment, 
        handleSubmit,
        handleSetIsFocusedTrue,
        isValid
    }
}

export default useCreateComment