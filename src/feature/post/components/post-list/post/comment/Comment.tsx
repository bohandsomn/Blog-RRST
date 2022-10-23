import React from 'react'
import { Div } from '@/components/atoms'
import useAppQuery from '../../../../../../hooks/useAppQuery'
import CommentListProvider from '../../../../provider/CommentList'
import CommentForm from './comment-form'
import CommentList from './comment-list'
import CommentListBoundary from './comment-list/CommentList.boundary'

const Comment: React.FC = () => {
    const query = useAppQuery('comment', {add: ['margin-top-10']})
    return (
        <Div query={query}>
            <CommentListProvider>
                <CommentForm />
                <CommentListBoundary>
                    <CommentList />
                </CommentListBoundary>
            </CommentListProvider>
        </Div>
    )
}

export default Comment