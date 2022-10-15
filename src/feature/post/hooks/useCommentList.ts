import { useCallback, useState } from 'react'
import type { ICommentListContext } from '../context/comment-list'
import type { CommentDTO } from '../utility/interface'

const useCommentList = (comments: CommentDTO[]): ICommentListContext => {
    const [data, setData] = useState(comments)
    const create: ICommentListContext['create'] = useCallback(async (createData) => {
        setData((previous) => [
            ...previous, 
            {...createData, id: Date.now(), userId: 1, postId: parseInt(createData.postId)} ////////////////
        ])
    }, [setData])
    
    const update: ICommentListContext['update'] = useCallback(async (updateData) => {
        setData((previous) => previous.map((comment) => {
            if (comment.id.toString() === updateData.commentId) {
                return {
                    ...comment,
                    content: updateData.content
                }
            }
            return comment
        }))
    }, [setData])

    const deleteComment: ICommentListContext['delete'] = useCallback(async (deleteData) => {
        setData((previous) => previous.filter((comment) => comment.id.toString() === deleteData.commentId))
    }, [setData])

    return {
        data,
        create,
        update,
        delete: deleteComment,
    }
}

export default useCommentList