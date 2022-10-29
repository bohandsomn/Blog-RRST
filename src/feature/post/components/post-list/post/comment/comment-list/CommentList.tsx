import React from 'react'
import { useContext } from 'react'
import { Ul } from '@/components/atoms'
import useAppQuery from '../../../../../../../hooks/useAppQuery'
import CommentListContext from '../../../../../context/comment-list'
import CommentProvider from '../../../../../provider/Comment'
import UpdateToggleProvider from '../../../../../provider/UpdateToggle'
import UserProvider from '../../../../../provider/User'
import CommentItem from './comment-item'
import CurrentSettingListProvider from '../../../../../provider/CurrentSettingList'

const CommentList: React.FC = () => {
    const query = useAppQuery('comment-list')
    const commentListContext = useContext(CommentListContext)

    if (commentListContext.isLoading) {
        return (
            <Ul query={query}>
                {
                    Array.from({ length: 5 }).map((_, index) => (
                        <UpdateToggleProvider key={index}>
                            <CommentItem />
                        </UpdateToggleProvider>
                    ))
                }
            </Ul>
        )
    }

    return (
        <CurrentSettingListProvider>
            <Ul query={query}>
                {
                    commentListContext.data?.map((comment) => (
                        <UserProvider key={comment.id} userId={comment.userId}>
                            <CommentProvider comment={comment}>
                                <UpdateToggleProvider>
                                    <CommentItem />
                                </UpdateToggleProvider>
                            </CommentProvider>
                        </UserProvider>
                    ))
                }
            </Ul>
        </CurrentSettingListProvider>
    )
}

export default CommentList