import { useCallback, useContext, useMemo } from "react"
import useToggle from "../../../hooks/useToggle"
import useInput from "../../../hooks/useInput"
import CommentListContext from "../context/comment-list"
import PostContext from "../context/post"

const useCreateComment = () => {
    const [comment, handleChangeComment, handleReset] = useInput('')
    const [isFocused, , handleSetIsFocusedTrue, handleSetIsFocusedFalse] = useToggle(false)
    const isValid: boolean = useMemo(() => {
        if (!isFocused || comment !== '') {
            return true
        }

        return comment !== ''
    }, [comment, isFocused])
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