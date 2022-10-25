import React from 'react'
import { LogIn, MainBigParagraph } from '@/components/atoms'
import { TwentyIndent } from '../../../../../layouts/wrapper'
import ToggleProvider from '../../../../../provider/toggle'

const LoginGreeting: React.FC = () => {
    return (
        <TwentyIndent
            left={
                <ToggleProvider>
                    <LogIn />
                </ToggleProvider>
            }
        >
            <MainBigParagraph>
                Log in
            </MainBigParagraph>
        </TwentyIndent>
    )
}

export default LoginGreeting