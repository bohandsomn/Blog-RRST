import React from 'react'
import { Form, MainButton, MainInput } from '@/components/atoms'
import useCreateMessage from '../../../../hooks/useCreateMessage'
import useAppStyles from '../../../../../../hooks/useAppStyles'

const MessageCreator: React.FC = () => {
    const { message, changeMessage, isValid, handleSetIsFocusedTrue, handleSubmit } = useCreateMessage()
    const className = useAppStyles('children/margin-right-10')
    return (
        <Form className={className} onSubmit={handleSubmit}>
            <MainInput 
                value={message}
                onChange={changeMessage}
                isValid={isValid}
                onFocus={handleSetIsFocusedTrue}
            />
            <MainButton type="submit" onClick={handleSubmit}>
                Send
            </MainButton>
        </Form>
    )
}

export default MessageCreator