import { useCallback, useState } from 'react'
import type { IPostListContext } from '../context/post-list'
import type { PostDTO } from '../utility/interface'

const usePostList = (posts: PostDTO[]): IPostListContext => {
    const [data, setData] = useState(posts)

    const deletePost: IPostListContext['delete'] = useCallback(async (dataDelete) => {
        setData((previous) => previous.filter((post) => post.id.toString() === dataDelete.postId))
    }, [setData])

    const update: IPostListContext['update'] = useCallback(async (dataUpdate) => {
        setData((previous) => previous.map((post) => {
            if (post.id.toString() === dataUpdate.postId) {
                return {
                    ...post,
                    title: post.title,
                    content: post.content
                }
            }
            return post
        }))
    }, [setData])

    return {
        data,
        update,
        delete: deletePost
    }
}

export default usePostList