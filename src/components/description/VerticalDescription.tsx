import React from 'react'
import { TenIndent } from '../../layouts/Wrapper'
import { MainBoldParagraph, MainParagraph } from '../atoms'

const VerticalDescription: React.FC<Props> = ({ header, text }) => {
    return (
        <TenIndent 
            top={<MainBoldParagraph>{header}</MainBoldParagraph>} 
            bottom={<MainParagraph>{text}</MainParagraph>}
        />
    )
}

type Props = {
    header: JSX.Element | string | number
    text: JSX.Element | string | number
}

export default VerticalDescription