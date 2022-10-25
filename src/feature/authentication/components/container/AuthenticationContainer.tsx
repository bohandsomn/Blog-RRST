import { Div } from '@/components/atoms'
import React from 'react'
import { SecondaryBackground } from '../../../../layouts/wrapper'
import useAppQuery from '../../../../hooks/useAppQuery'

const AuthenticationContainer: React.FC<Props> = ({ children }) => {
    const queryAuthenticationForm = useAppQuery('authentication_form')
    const queryAuthenticationContainer = useAppQuery('authentication_container')
    return (
        <Div query={queryAuthenticationContainer}>
            <SecondaryBackground>
                <Div query={queryAuthenticationForm}>
                    {children}
                </Div>
            </SecondaryBackground>
        </Div>
    )
}

type Props = {
    children?: any
}

export default AuthenticationContainer