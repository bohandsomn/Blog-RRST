import React from 'react'
import useAppQuery from '../../hooks/useAppQuery'
import { TenIndent } from '../../layouts/wrapper'
import ToggleProvider from '../../provider/toggle'
import { Div, Dislike as DislikeIcon, MainParagraph } from '../atoms'

const Dislike: React.FC<Props> = ({fill, ...props}) => {
    const query = useAppQuery('dislike')
    return (
        <Div query={query} {...props}>
            <TenIndent 
                right={
                    <ToggleProvider>
                        <DislikeIcon fill={fill} />
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

type Props = Omit<NonNullable<typeof Div.defaultProps>, 'children' | 'query'> & {
    fill?: string
}

export default Dislike