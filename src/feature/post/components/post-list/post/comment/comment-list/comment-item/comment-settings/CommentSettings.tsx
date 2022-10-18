import React, { useCallback, useContext } from 'react'
import { Account, Delete, Update } from '@/components/atoms'
import { ListItem } from '@/components/list'
import SettingsList from '@/components/settings-list'
import ToggleProvider from '../../../../../../../../../provider/toggle'
import CommentContext from '../../../../../../../context/comment'
import CommentListContext from '../../../../../../../context/comment-list'
import UpdateToggle from '../../../../../../../context/update-toggle'

const CommentSettings: React.FC = () => {
    const { handleToggle } = useContext(UpdateToggle)
    const { delete: deleteComment } = useContext(CommentListContext)
    const commentContext = useContext(CommentContext)

    const handleDeleteComment = useCallback(async () => {
        await deleteComment({
            commentId: commentContext.data.id.toString()
        })
    }, [deleteComment, commentContext.data.id])

    return (
        <ToggleProvider>
            <SettingsList>
                <ToggleProvider>
                    <ListItem right={<Account />}>
                        User
                    </ListItem>
                </ToggleProvider>
                <ToggleProvider>
                    <ListItem onClick={handleToggle} right={<Update />}>
                        Update
                    </ListItem>
                </ToggleProvider>
                <ToggleProvider>
                    <ListItem onClick={handleDeleteComment} right={<Delete />}>
                        Delete
                    </ListItem>
                </ToggleProvider>
            </SettingsList>
        </ToggleProvider>
    )
}

export default CommentSettings