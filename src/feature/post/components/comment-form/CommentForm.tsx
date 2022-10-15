import React from 'react'
import { Form, MainButton, MainInput } from '../../../../components/atoms'
import { TenIndent } from '../../../../layouts/wrapper'
import useCreateComment from '../../hooks/useCreateComments'

const CommentForm: React.FC = () => {
    const [comment, handleChangeComment, handleSubmit] = useCreateComment()

    return (
        <Form onSubmit={handleSubmit}>
            <TenIndent 
                right={
                    <MainButton type="submit" placeholder="Enter your comment">
                        Submit
                    </MainButton>
                }
            >
                <MainInput value={comment} onChange={handleChangeComment} />
            </TenIndent>
        </Form>
    )
}

export default CommentForm