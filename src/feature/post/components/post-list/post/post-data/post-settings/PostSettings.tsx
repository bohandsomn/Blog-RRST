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
import { useTranslation } from '../../../../../../internationalization'

const PostSettings: React.FC = () => {
    const user = useAppSelector(authorizationSelector)
    const { handleToggle } = useContext(UpdateToggle)
    const { delete: deletePost } = useContext(PostListContext)
    const { id, userId } = useContext(PostContext)
    const {translation} = useTranslation()

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
                        {translation.feature.post['post-data']['post-settings']['list-item'].user}
                    </ListItem>
                </ToggleProvider>
                <ToggleProvider>
                    <ListItem right={<Post />}>
                        {translation.feature.post['post-data']['post-settings']['list-item'].post}
                    </ListItem>
                </ToggleProvider>
                {
                    (user.data?.id === userId) && (
                        <>
                            <ToggleProvider>
                                <ListItem onClick={handleToggle} right={<Update />}>
                                    {translation.feature.post['post-data']['post-settings']['list-item'].update}
                                </ListItem>
                            </ToggleProvider>
                            <ToggleProvider>
                                <ListItem onClick={handleDeletePost} right={<Delete />}>
                                    {translation.feature.post['post-data']['post-settings']['list-item'].delete}
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