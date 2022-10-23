import React, { useCallback, useContext } from 'react'
import { Account, Delete, Post, Update } from '@/components/atoms'
import { ListItem } from '@/components/list'
import SettingsList from '@/components/settings-list'
import ToggleProvider from '../../../../../../../provider/toggle'
import PostContext from '../../../../../context/post'
import PostListContext from '../../../../../context/post-list'
import UpdateToggle from '../../../../../context/update-toggle'
import useAppSelector from '../../../../../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../../../../../store'

const PostSettings: React.FC = () => {
    const user = useAppSelector(authorizationSelector)
    const { handleToggle } = useContext(UpdateToggle)
    const { delete: deletePost } = useContext(PostListContext)
    const { id, userId } = useContext(PostContext)

    const handleDeletePost = useCallback(() => {
        deletePost({
            postId: id.toString()
        })
    }, [deletePost, id])

    return (
        <ToggleProvider>
            <SettingsList>
                <ToggleProvider>
                    <ListItem right={<Account />}>
                        User
                    </ListItem>
                </ToggleProvider>
                <ToggleProvider>
                    <ListItem right={<Post />}>
                        Post
                    </ListItem>
                </ToggleProvider>
                {
                    (user.data?.id === userId) && (
                        <>
                            <ToggleProvider>
                                <ListItem onClick={handleToggle} right={<Update />}>
                                    Update
                                </ListItem>
                            </ToggleProvider>
                            <ToggleProvider>
                                <ListItem onClick={handleDeletePost} right={<Delete />}>
                                    Delete
                                </ListItem>
                            </ToggleProvider>
                        </>
                    )
                }
            </SettingsList>
        </ToggleProvider>
    )
}

export default PostSettings