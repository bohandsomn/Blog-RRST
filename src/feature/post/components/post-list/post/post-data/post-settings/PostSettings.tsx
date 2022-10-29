import React, { useContext } from 'react'
import { Div } from '@/components/atoms'
import SettingsList from '@/components/settings-list'
import ToggleProvider from '../../../../../../../provider/toggle'
import PostContext from '../../../../../context/post'
import CurrentSettingList from '../../../../../context/current-setting-list'
import PostSettingsList from './post-settings-list'

const PostSettings: React.FC = () => {
    const postContext = useContext(PostContext)
    const currentSettingListContext = useContext(CurrentSettingList)

    const isCurrentPost = currentSettingListContext.id === postContext.id

    return (
        <ToggleProvider>
            <Div onClick={currentSettingListContext.handleSetId(postContext.id)}>
                <SettingsList>
                    {
                        isCurrentPost
                            ? <PostSettingsList />
                            : undefined
                    }
                </SettingsList>
            </Div>
        </ToggleProvider>
    )
}

export default PostSettings