import React from 'react'
import { TenIndent } from '../../layouts/wrapper'
import ToggleProvider from '../../provider/toggle'
import { Div, Like as LikeIcon, MainParagraph } from '../atoms'

const Like: React.FC<Props> = (props) => {
    return (
        <Div {...props}>
            <TenIndent 
                right={
                    <ToggleProvider>
                        <LikeIcon />
                    </ToggleProvider>
                }
            >
                <MainParagraph>
                    Like
                </MainParagraph>
            </TenIndent>
        </Div>
    )
}

type Props = Omit<NonNullable<typeof Div.defaultProps>, 'children'>

export default Like