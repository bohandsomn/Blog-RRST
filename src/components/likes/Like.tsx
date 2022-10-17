import React from 'react'
import useAppQuery from '../../hooks/useAppQuery'
import { TenIndent } from '../../layouts/wrapper'
import ToggleProvider from '../../provider/toggle'
import { Div, Like as LikeIcon, MainParagraph } from '../atoms'

const Like: React.FC<Props> = ({fill, ...props}) => {
    const query = useAppQuery('like')
    return (
        <Div query={query} {...props}>
            <TenIndent 
                right={
                    <ToggleProvider>
                        <LikeIcon fill={fill} />
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

type Props = Omit<NonNullable<typeof Div.defaultProps>, 'children' | 'query'> & {
    fill?: string
}

export default Like