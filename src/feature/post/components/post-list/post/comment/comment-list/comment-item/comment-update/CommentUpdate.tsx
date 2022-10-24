import React from 'react'
import { Form, MainButton } from '@/components/atoms'
import InputWithLabel from '@/components/input-with-label'
import useAppQuery from '../../../../../../../../../hooks/useAppQuery'
import useCommentUpdate from '../../../../../../../hooks/useCommentUpdate'
import { useTranslation } from '../../../../../../../../internationalization'

const CommentUpdate: React.FC = () => {
    const query = useAppQuery('comment__content')
    const {
        handleSubmit,
        content,
        handleChangeContent
    } = useCommentUpdate()
    const {translation} = useTranslation()

    return (
        <Form onSubmit={handleSubmit} query={query}>
            <InputWithLabel 
                isValid={content !== ''}
                label={translation.feature.post.comment['comment-update'].field.content} 
                value={content}
                onChange={handleChangeContent}
            />
            <MainButton type="submit" onClick={handleSubmit}>
                {translation.feature.post.comment['comment-update'].button.submit}
            </MainButton>
        </Form>
    )
}

export default CommentUpdate