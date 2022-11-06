import { MainBigParagraph } from '@/components/atoms'
import React from 'react'
import useAppStyles from '../../../../../../hooks/useAppStyles'
import useGoToPage from '../../../../../../hooks/useGoToPage'

const NavigateToHome: React.FC = () => {
    const { handleGoToHomePage } = useGoToPage()
    const className = useAppStyles('cursor-pointer', 'text-decoration-underline', 'margin-bottom-20')
    return (
        <MainBigParagraph className={className} onClick={handleGoToHomePage}>
            Back to Home
        </MainBigParagraph>
    )
}

export default NavigateToHome