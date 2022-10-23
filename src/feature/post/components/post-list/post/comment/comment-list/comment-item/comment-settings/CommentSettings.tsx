import React, { useCallback, useContext } from 'react'
import { Account, Delete, Update } from '@/components/atoms'
import { ListItem } from '@/components/list'
import SettingsList from '@/components/settings-list'
import ToggleProvider from '../../../../../../../../../provider/toggle'
import CommentContext from '../../../../../../../context/comment'
import CommentListContext from '../../../../../../../context/comment-list'
import UpdateToggle from '../../../../../../../context/update-toggle'
import useAppSelector from 'src/hooks/useAppSelector'
import { authorizationSelector } from 'src/store'

const CommentSettings: React.FC = () => {
    const user = useAppSelector(authorizationSelector)
    const { handleToggle } = useContext(UpdateToggle)
    const { delete: deleteComment } = useContext(CommentListContext)
    const commentContext = useContext(CommentContext)

    const handleDeleteComment = useCallback(async () => {
        if (!commentContext) {
            return
        }
        await deleteComment({
            commentId: commentContext.data.id.toString()
        })
    }, [deleteComment, commentContext?.data.id])

    return (
        <ToggleProvider>
            <SettingsList>
                <ToggleProvider>
                    <ListItem right={<Account />}>
                        User
                    </ListItem>
                </ToggleProvider>
                
                {
                    (
                        user.data?.id === commentContext?.user?.id && 
                        typeof commentContext?.user?.id === 'number'
                    ) && (
                        <>
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
                        </>
                    )
                }
            </SettingsList>
        </ToggleProvider>
    )
}

export default CommentSettings