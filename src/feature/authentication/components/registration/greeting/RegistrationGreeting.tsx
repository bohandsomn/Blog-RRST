import React from 'react'
import { LogIn, MainBigParagraph } from '@/components/atoms'
import { TwentyIndent } from '../../../../../layouts/wrapper'
import ToggleProvider from '../../../../../provider/toggle'

const RegistrationGreeting: React.FC = () => {
    return (
        <TwentyIndent
            left={
                <ToggleProvider>
                    <LogIn />
                </ToggleProvider>
            }
        >
            <MainBigParagraph>
                Registration
            </MainBigParagraph>
        </TwentyIndent>
    )
}

export default RegistrationGreeting