import { useCallback, useContext } from "react"
import useInput from "../../../hooks/useInput"
import CommentListContext from "../context/comment-list"
import PostContext from "../context/post"

const useCreateComment = () => {
    const [comment, handleChangeComment, handleReset] = useInput('')
    const {create} = useContext(CommentListContext)
    const postContext = useContext(PostContext)
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(async (event) => {
        event.preventDefault()
        await create({
            postId: postContext.id.toString(),
            content: comment
        })
        handleReset()
    }, [create, postContext, comment, handleReset])

    return [comment, handleChangeComment, handleSubmit] as const
}

export default useCreateComment