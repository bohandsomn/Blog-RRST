import { useCallback, useState } from 'react'
import type { IPostListContext } from '../context/post-list'
import type { PostDTO } from '../utility/interface'
import { privacyMock } from '../__mock__'

const usePostList = (posts: PostDTO[]): IPostListContext => {
    const [data, setData] = useState(posts)

    const deletePost: IPostListContext['delete'] = useCallback(async (dataDelete) => {
        setData((previous) => previous.filter((post) => post.id.toString() !== dataDelete.postId))
    }, [setData])

    const update: IPostListContext['update'] = useCallback(async (dataUpdate) => {
        setData((previous) => previous.map((post) => {
            if (post.id.toString() === dataUpdate.postId) {
                const privacyId = privacyMock.findIndex((privacy) => privacy.value === dataUpdate.privacy) + 1
                
                return {
                    ...post,
                    title: post.title,
                    content: post.content,
                    privacyId: privacyId === -1 ? post.privacyId : privacyId
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