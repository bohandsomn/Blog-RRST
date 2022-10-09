import React from 'react'
import { TenIndent } from '../../layouts/Wrapper'
import ToggleProvider from '../../provider/toggle'
import { Div, Dislike as DislikeIcon, MainParagraph } from '../atoms'

const Dislike: React.FC<Props> = (props) => {
    return (
        <Div {...props}>
            <TenIndent 
                right={
                    <ToggleProvider>
                        <DislikeIcon />
                    </ToggleProvider>
                }
            >
                <MainParagraph>
                    Dislike
                </MainParagraph>
            </TenIndent>
        </Div>
    )
}

type Props = Omit<NonNullable<typeof Div.defaultProps>, 'children'>

export default Dislike