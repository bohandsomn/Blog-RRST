import React from 'react'
import { Div } from '../../../../../../components/atoms'
import useAppQuery from '../../../../../../hooks/useAppQuery'
import CommentListProvider from '../../../../provider/CommentList'
import { commentsMock } from '../../../../__mock__'
import CommentForm from './comment-form'
import CommentList from './comment-list'

const Comment: React.FC = () => {
    const query = useAppQuery('comment', {add: ['margin-top-10']})
    return (
        <Div query={query}>
            <CommentListProvider comments={commentsMock}>
                <CommentForm />
                <CommentList />
            </CommentListProvider>
        </Div>
    )
}

export default Comment