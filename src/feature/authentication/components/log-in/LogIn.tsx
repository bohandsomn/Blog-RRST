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
    const user = useAppSelector(authorizationSelector)
    if (user.data !== null) {
        router.push(locale + PATH.HOME)
    }
    
    return (
        <AuthenticationContainer>
            <LoginGreeting />
            <Form onSubmit={handleSubmit} className={className}>
                <InputWithLabel 
                    label="Enter login"
                    autoComplete="none"
                    isValid={isValidLogin}
                    onFocus={handleSetIsFocusedLoginTrue}
                    value={login}
                    onChange={handleChangeLogin}
                />
                <InputWithLabel 
                    label="Enter password"
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
                    Log in
                </MainButton>
            </Form>
            <MainParagraph>
                You are not registred? <Link href={
                    `${locale}${PATH.REGISTRATION}`
                }>Registration</Link>
            </MainParagraph>
        </AuthenticationContainer>
    )
}

export default LogIn