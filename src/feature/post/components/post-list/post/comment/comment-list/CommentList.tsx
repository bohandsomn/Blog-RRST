import React from 'react'
import { useContext } from 'react'
import { Ul } from '@/components/atoms'
import useAppQuery from '../../../../../../../hooks/useAppQuery'
import CommentListContext from '../../../../../context/comment-list'
import CommentProvider from '../../../../../provider/Comment'
import UpdateToggleProvider from '../../../../../provider/UpdateToggle'
import UserProvider from '../../../../../provider/User'
import CommentItem from './comment-item'

const CommentList: React.FC = () => {
    const query = useAppQuery('comment-list')
    const {data} = useContext(CommentListContext)
    return (
        <Ul query={query}>
            {
                data.map((comment) => (
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
    )
}

export default CommentList