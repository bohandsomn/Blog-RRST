import React, { useContext, useMemo } from 'react'
import { Div } from '@/components/atoms'
import SettingsList from '@/components/settings-list'
import ToggleProvider from '../../../../../../../../../provider/toggle'
import CommentContext from '../../../../../../../context/comment'
import CurrentSettingList from '../../../../../../../context/current-setting-list'
import CommentSettingsList from './comment-settings-list'

const CommentSettings: React.FC = () => {
    const commentContext = useContext(CommentContext)
    const currentSettingListContext = useContext(CurrentSettingList)

    const handleSetId = useMemo(() => {
        return commentContext?.data.id !== undefined 
            ? currentSettingListContext.handleSetId(commentContext?.data.id) 
            : undefined
    }, [commentContext?.data.id, currentSettingListContext.handleSetId])

    const isCurrentComment = currentSettingListContext.id === commentContext?.data.id

    return (
        <ToggleProvider>
            <Div onClick={handleSetId}>
                <SettingsList>
                    {
                        isCurrentComment 
                            ? <CommentSettingsList />
                            : undefined
                    }
                </SettingsList>
            </Div>
        </ToggleProvider>
    )
}

export default CommentSettings