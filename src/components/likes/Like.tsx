import React from 'react'
import { useTranslation } from '../../feature/internationalization'
import useAppQuery from '../../hooks/useAppQuery'
import { TenIndent } from '../../layouts/wrapper'
import ToggleProvider from '../../provider/toggle'
import { Div, Like as LikeIcon, MainParagraph } from '../atoms'

const Like: React.FC<Props> = ({fill, ...props}) => {
    const query = useAppQuery('like')
    const {translation} = useTranslation()
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
                    {translation.components.likes.like}
                </MainParagraph>
            </TenIndent>
        </Div>
    )
}

type Props = Omit<NonNullable<typeof Div.defaultProps>, 'children' | 'query'> & {
    fill?: string
}

export default Like