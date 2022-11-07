import React from 'react'
import { Form, MainButton, MainInput } from '@/components/atoms'
import useCreateMessage from '../../../../hooks/useCreateMessage'
import useAppStyles from '../../../../../../hooks/useAppStyles'
import { useTranslation } from 'src/feature/internationalization'

const MessageCreator: React.FC = () => {
    const { message, changeMessage, isValid, handleSetIsFocusedTrue, handleSubmit } = useCreateMessage()
    const className = useAppStyles('children/margin-right-10')
    const {translation} = useTranslation()
    return (
        <Form className={className} onSubmit={handleSubmit}>
            <MainInput 
                placeholder={translation.feature.chat.message.creator.field.message.placeholder}
                value={message}
                onChange={changeMessage}
                isValid={isValid}
                onFocus={handleSetIsFocusedTrue}
            />
            <MainButton type="submit" onClick={handleSubmit}>
                {translation.feature.chat.message.creator.button.submit}
            </MainButton>
        </Form>
    )
}

export default MessageCreator