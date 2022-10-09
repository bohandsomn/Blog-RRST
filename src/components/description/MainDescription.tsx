import React from 'react'
import { TenIndent } from '../../layouts/wrapper'
import { MainBoldParagraph, MainParagraph } from '../atoms'

const MainDescription: React.FC<Props> = ({ header, text, time }) => {
    return (
        <TenIndent 
            left={
                <>
                    <MainBoldParagraph>{header}</MainBoldParagraph>
                    <MainParagraph>{text}</MainParagraph>
                </>
            }
            right={<MainParagraph>{time}</MainParagraph>}
        />
    )
}

type Props = {
    header: JSX.Element | string | number
    text: JSX.Element | string | number
    time: JSX.Element | string | number
}

export default MainDescription