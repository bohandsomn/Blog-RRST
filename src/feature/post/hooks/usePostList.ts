import { useCallback, useMemo } from 'react'
import useFetch from 'src/hooks/useFetch'
import { State } from 'src/hooks/useFetch/interface'
import { ErrorResponse } from 'src/utility/type'
import { postNotifier } from '../api'
import type { IPostListContext } from '../context/post-list'
import type { PostDTO } from '../utility/interface'
import type PostResponse from '../../../store/post/api/response'

const usePostList = (posts: ErrorResponse | PostResponse.GetMany): IPostListContext => {
    const initialPosts: State<PostDTO[]> = useMemo(() => ({
        data: posts.data || null,
        isLoading: false,
        error: posts.data === undefined ? posts.message : null
    }), [posts])
    const { data, previous, isLoading, error, onSuccess, onReject, onPending } = useFetch(initialPosts)

    const deletePost: IPostListContext['delete'] = useCallback(async (dataDelete) => {
        onPending()
        const deleteResponse = await postNotifier.delete.call(dataDelete)
        if (typeof deleteResponse.data === 'number') {
            onSuccess(data?.filter((post) => post.id.toString() !== dataDelete.postId) || [])
        } else {
            onReject(deleteResponse.message)
        }
    }, [onPending, onSuccess, data, onReject])

    const update: IPostListContext['update'] = useCallback(async (dataUpdate) => {
        onPending()
        const updateResponse = await postNotifier.update.call(dataUpdate)
        if (updateResponse.data) {
            onSuccess(data?.map((post) => post.id === updateResponse.data.id ? updateResponse.data : post) || [])
        } else {
            onReject(updateResponse.message)
        }
    }, [onPending, onSuccess, data, onReject])

    const addMany: IPostListContext['addMany'] = useCallback(async (dataAddMany) => {
        onPending()
        const addManyResponse = await postNotifier.getMany.call(dataAddMany)
        if (addManyResponse.data) {
            onSuccess([
                ...(data || []),
                ...addManyResponse.data
            ])
        } else {
            onReject(addManyResponse.message)
        }
    }, [onPending, onSuccess, data, onReject])

    return {
        update,
        delete: deletePost,
        addMany,
        data, 
        previous, 
        isLoading, 
        error, 
        onSuccess, 
        onReject, 
        onPending
    }
}

export default usePostList