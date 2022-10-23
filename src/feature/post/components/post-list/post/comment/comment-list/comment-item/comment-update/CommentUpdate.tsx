import React from 'react'
import { Form, MainButton } from '@/components/atoms'
import InputWithLabel from '@/components/input-with-label'
import useAppQuery from '../../../../../../../../../hooks/useAppQuery'
import useCommentUpdate from '../../../../../../../hooks/useCommentUpdate'

const CommentUpdate: React.FC = () => {
    const query = useAppQuery('comment__content')
    const {
        handleSubmit,
        content,
        handleChangeContent
    } = useCommentUpdate()

    return (
        <Form onSubmit={handleSubmit} query={query}>
            <InputWithLabel 
                isValid={content !== ''}
                label={'Enter comment'} 
                value={content}
                onChange={handleChangeContent}
            />
            <MainButton type="submit" onClick={handleSubmit}>Submit</MainButton>
        </Form>
    )
}

export default CommentUpdate