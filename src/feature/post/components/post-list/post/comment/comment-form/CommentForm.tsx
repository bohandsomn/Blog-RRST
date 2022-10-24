import React from 'react'
import { Form, MainButton, MainInput } from '@/components/atoms'
import { TenIndent } from '../../../../../../../layouts/wrapper'
import useCreateComment from '../../../../../hooks/useCreateComments'
import { useTranslation } from '../../../../../../internationalization'

const CommentForm: React.FC = () => {
    const { comment, handleChangeComment, handleSubmit, handleSetIsFocusedTrue, isValid } = useCreateComment()
    const {translation} = useTranslation()
    return (
        <Form onSubmit={handleSubmit}>
            <TenIndent 
                right={
                    <MainButton type="submit" placeholder="Enter your comment">
                        {translation.feature.post.comment['comment-form'].button.submit}
                    </MainButton>
                }
            >
                <MainInput 
                    isValid={isValid} 
                    value={comment} 
                    onChange={handleChangeComment} 
                    onFocus={handleSetIsFocusedTrue}
                    placeholder={translation.feature.post.comment['comment-form'].field.content}
                />
            </TenIndent>
        </Form>
    )
}

export default CommentForm