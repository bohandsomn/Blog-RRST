import React from 'react'
import { TenIndent } from '../../layouts/wrapper'
import { MainBoldParagraph, MainParagraph } from '../atoms'

const HorizontalDescription: React.FC<Props> = ({ header, text }) => {
    return (
        <TenIndent 
            left={<MainBoldParagraph>{header}</MainBoldParagraph>} 
            right={<MainParagraph>{text}</MainParagraph>}
        />
    )
}

type Props = {
    header: JSX.Element | string | number
    text: JSX.Element | string | number
}

export default HorizontalDescription