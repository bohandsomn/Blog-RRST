import { useCallback, useContext, useEffect, useMemo } from 'react'
import useFetch from 'src/hooks/useFetch'
import { commentNotifier } from '../api'
import PostContext from '../context/post'
import type { ICommentListContext } from '../context/comment-list'
import type { CommentDTO } from '../utility/interface'

const useCommentList = (): ICommentListContext => {
    const postContext = useContext(PostContext)
    const { data, previous, isLoading, error, onSuccess, onReject, onPending } = useFetch<CommentDTO[]>()
    useEffect(() => {
        const handleFetch = async () => {
            onPending()
            const response = await commentNotifier.getMany.call({ postId: postContext.id.toString() })
            if (response.data) {
                onSuccess(response.data)
            } else {
                onReject(response.message)
            }
        }
        handleFetch()
    }, [])
    
    const create: ICommentListContext['create'] = useCallback(async (createData) => {
        onPending()
        const createResponse = await commentNotifier.create.call(createData)
        if (createResponse.data) {
            onSuccess([
                ...(data || []),
                createResponse.data
            ])
        } else {
            onReject(createResponse.message)
        }
    }, [onPending, onSuccess, data, onReject])
    
    const update: ICommentListContext['update'] = useCallback(async (updateData) => {
        onPending()
        const updateResponse = await commentNotifier.update.call(updateData)
        if (updateResponse.data) {
            onSuccess(data?.map((comment) => {
                return comment.id === updateResponse.data.id ? updateResponse.data : comment
            }) || [])
        } else {
            onReject(updateResponse.message)
        }
    }, [onPending, onSuccess, data, onReject])

    const deleteComment: ICommentListContext['delete'] = useCallback(async (deleteData) => {
        onPending()
        const deleteResponse = await commentNotifier.delete.call(deleteData)
        if (typeof deleteResponse.data === 'number') {
            onSuccess(data?.filter((comment) =>  comment.id.toString() !== deleteData.commentId) || [])
        } else {
            onReject(deleteResponse.message)
        }
    }, [onPending, onSuccess, data, onReject])

    const addMany: ICommentListContext['addMany'] = useCallback(async (dataAddMany) => {
        onPending()
        const addManyResponse = await commentNotifier.getMany.call(dataAddMany)
        if (addManyResponse.data) {
            onSuccess([
                ...(data || []),
                ...addManyResponse.data
            ])
        } else {
            onReject(addManyResponse.message)
        }
    }, [onPending, onSuccess, data, onReject])

    return useMemo(() => ({
        data, 
        previous, 
        isLoading, 
        error, 
        onSuccess, 
        onReject, 
        onPending,
        create,
        update,
        delete: deleteComment,
        addMany,
    }), [data, previous, isLoading, error, onSuccess, onReject, onPending, create, update, deleteComment, addMany])
}

export default useCommentList