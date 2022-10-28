import React from 'react'
import { LogIn, MainBigParagraph } from '@/components/atoms'
import { TwentyIndent } from '../../../../../layouts/wrapper'
import ToggleProvider from '../../../../../provider/toggle'
import { useTranslation } from '../../../../internationalization'

const LogInGreeting: React.FC = () => {
    const {translation} = useTranslation()
    return (
        <TwentyIndent
            left={
                <ToggleProvider>
                    <LogIn />
                </ToggleProvider>
            }
        >
            <MainBigParagraph>
                {translation.feature.authentication['log-in'].greeting}
            </MainBigParagraph>
        </TwentyIndent>
    )
}

export default LogInGreeting