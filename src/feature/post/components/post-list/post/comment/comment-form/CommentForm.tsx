import React from 'react'
import { Form, MainButton, MainInput } from '@/components/atoms'
import { TenIndent } from '../../../../../../../layouts/wrapper'
import useCreateComment from '../../../../../hooks/useCreateComments'

const CommentForm: React.FC = () => {
    const { comment, handleChangeComment, handleSubmit, handleSetIsFocusedTrue, isValid } = useCreateComment()

    return (
        <Form onSubmit={handleSubmit}>
            <TenIndent 
                right={
                    <MainButton type="submit" placeholder="Enter your comment">
                        Submit
                    </MainButton>
                }
            >
                <MainInput 
                    isValid={isValid} 
                    value={comment} 
                    onChange={handleChangeComment} 
                    onFocus={handleSetIsFocusedTrue}
                />
            </TenIndent>
        </Form>
    )
}

export default CommentForm