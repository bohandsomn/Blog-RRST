import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Form, MainButton, MainParagraph } from '@/components/atoms'
import InputWithLabel from '@/components/input-with-label'
import LoginGreeting from './greeting'
import useLogin from '../../hooks/useLogin'
import useAppStyles from '../../../../hooks/useAppStyles'
import PATH from '../../../../path'
import useAppSelector from '../../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../../store'
import AuthenticationContainer from '../container/AuthenticationContainer'
import { useTranslation } from '../../../internationalization'

const LogIn: React.FC = () => {
    const {
        handleSubmit,
        isValidLogin,
        handleSetIsFocusedLoginTrue,
        login,
        handleChangeLogin,
        isValidPassword,
        handleSetIsFocusedPasswordTrue,
        password,
        handleChangePassword
    } = useLogin()
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
            <LoginGreeting />
            <Form onSubmit={handleSubmit} className={className}>
                <InputWithLabel 
                    label={translation.feature.authentication['log-in'].field.login}
                    autoComplete="none"
                    isValid={isValidLogin}
                    onFocus={handleSetIsFocusedLoginTrue}
                    value={login}
                    onChange={handleChangeLogin}
                />
                <InputWithLabel 
                    label={translation.feature.authentication['log-in'].field.password}
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
                    {translation.feature.authentication['log-in'].button.submit}
                </MainButton>
            </Form>
            <MainParagraph>
                {translation.feature.authentication['log-in'].message.question}&nbsp; 
                <Link href={
                    `${locale}${PATH.REGISTRATION}`
                }>
                    {translation.feature.authentication['log-in'].message.link}
                </Link>
            </MainParagraph>
        </AuthenticationContainer>
    )
}

export default LogIn