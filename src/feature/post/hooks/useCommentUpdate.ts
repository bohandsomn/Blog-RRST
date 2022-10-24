import { useCallback, useContext } from 'react'
import useInput from '../../../hooks/useInput'
import CommentContext from '../context/comment'
import CommentListContext from '../context/comment-list'
import UpdateToggle from '../context/update-toggle'

const useCommentUpdate = () => {
    const commentContext = useContext(CommentContext)
    const commentListContext = useContext(CommentListContext)
    const [content, handleChangeContent] = useInput(commentContext?.data.content || '')
    const {handleSetFalse} = useContext(UpdateToggle)

    const handleSubmit = useCallback(async (event: {preventDefault: () => void}) => {
        event.preventDefault()
        if (!commentContext) {
            return
        }

        await commentListContext.update({
            content,
            commentId: commentContext.data.id.toString()
        })

        handleSetFalse()
    }, [content, commentContext?.data.id, handleSetFalse])

    return {
        handleSubmit,
        content,
        handleChangeContent,
    }
}

export default useCommentUpdate