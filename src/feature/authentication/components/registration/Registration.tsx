import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Form, MainButton, MainParagraph } from '@/components/atoms'
import InputWithLabel from '@/components/input-with-label'
import RegistrationGreeting from './greeting'
import useRegistration from '../../hooks/useRegistration'
import useAppStyles from '../../../../hooks/useAppStyles'
import PATH from '../../../../path'
import useAppSelector from '../../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../../store'
import AuthenticationContainer from '../container/AuthenticationContainer'
import { useTranslation } from '../../../internationalization'

const Registration: React.FC = () => {
    const {
        handleSubmit,
        isValidName,
        handleSetIsFocusedNameTrue,
        name,
        handleChangeName,
        isValidEmail,
        handleSetIsFocusedEmailTrue,
        email,
        handleChangeEmail,
        isValidLogin,
        handleSetIsFocusedLoginTrue,
        login,
        handleChangeLogin,
        isValidPassword,
        handleSetIsFocusedPasswordTrue,
        password,
        handleChangePassword
    } = useRegistration()
    const className = useAppStyles('children/margin-bottom-10')
    const router = useRouter()
    const locale = router?.locale === undefined ? '' : '/' + router.locale
    const {translation} = useTranslation()
    const user = useAppSelector(authorizationSelector)
    if (user.data !== null) {
        router.push(locale + PATH.HOME)
    }

    return (
        <AuthenticationContainer>
            <RegistrationGreeting />
            <Form onSubmit={handleSubmit} className={className}>
                <InputWithLabel 
                    label={translation.feature.authentication.registration.field.name}
                    isValid={isValidName}
                    onFocus={handleSetIsFocusedNameTrue}
                    value={name}
                    onChange={handleChangeName}
                />
                <InputWithLabel 
                    label={translation.feature.authentication.registration.field.email}
                    type="email"
                    isValid={isValidEmail}
                    onFocus={handleSetIsFocusedEmailTrue}
                    value={email}
                    onChange={handleChangeEmail}
                />
                <InputWithLabel 
                    label={translation.feature.authentication.registration.field.login}
                    autoCapitalize="none"
                    isValid={isValidLogin}
                    onFocus={handleSetIsFocusedLoginTrue}
                    value={login}
                    onChange={handleChangeLogin}
                />
                <InputWithLabel 
                    label={translation.feature.authentication.registration.field.password}
                    type="password"
                    autoComplete="none"
                    isValid={isValidPassword}
                    onFocus={handleSetIsFocusedPasswordTrue}
                    value={password}
                    onChange={handleChangePassword}
                    min={4}
                    max={10}
                />
                <MainButton onClick={handleSubmit}>
                    {translation.feature.authentication.registration.button.submit}
                </MainButton>
            </Form>
            <MainParagraph>
                {translation.feature.authentication.registration.message.question}&nbsp; 
                <Link href={
                    `${locale}${PATH.LOG_IN}`
                }>
                    {translation.feature.authentication.registration.message.link}
                </Link>
            </MainParagraph>
        </AuthenticationContainer>
    )
}

export default Registration