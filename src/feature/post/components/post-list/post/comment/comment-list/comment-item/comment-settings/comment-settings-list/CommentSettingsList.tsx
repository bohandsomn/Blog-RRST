import React, { useCallback, useContext } from 'react'
import { Account, Delete, Update } from '@/components/atoms'
import { ListItem } from '@/components/list'
import ToggleProvider from '../../../../../../../../../../provider/toggle'
import CommentContext from '../../../../../../../../context/comment'
import CommentListContext from '../../../../../../../../context/comment-list'
import UpdateToggle from '../../../../../../../../context/update-toggle'
import useAppSelector from '../../../../../../../../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../../../../../../../../store'
import { useTranslation } from '../../../../../../../../../internationalization'

const CommentSettingsList: React.FC = () => {
    const user = useAppSelector(authorizationSelector)
    const { handleToggle } = useContext(UpdateToggle)
    const { delete: deleteComment } = useContext(CommentListContext)
    const commentContext = useContext(CommentContext)
    const {translation} = useTranslation()

    const handleDeleteComment = useCallback(async () => {
        if (!commentContext) {
            return
        }
        await deleteComment({
            commentId: commentContext.data.id.toString()
        })
    }, [deleteComment, commentContext?.data.id])

    const isOwner = user.data?.id === commentContext?.user?.id && typeof commentContext?.user?.id === 'number'

    return (
        <>
            <ToggleProvider>
                <ListItem right={<Account />}>
                    {translation.feature.post.comment['comment-settings']['list-item'].user}
                </ListItem>
            </ToggleProvider>
            {
                isOwner && (
                    <>
                        <ToggleProvider>
                            <ListItem onClick={handleToggle} right={<Update />}>
                                {translation.feature.post.comment['comment-settings']['list-item'].update}
                            </ListItem>
                        </ToggleProvider>
                        <ToggleProvider>
                            <ListItem onClick={handleDeleteComment} right={<Delete />}>
                                {translation.feature.post.comment['comment-settings']['list-item'].delete}
                            </ListItem>
                        </ToggleProvider>
                    </>
                )
            }
        </>
    )
}

export default CommentSettingsList