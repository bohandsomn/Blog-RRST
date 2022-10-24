import React from 'react'
import { useTranslation } from '../../feature/internationalization'
import useAppQuery from '../../hooks/useAppQuery'
import { TenIndent } from '../../layouts/wrapper'
import ToggleProvider from '../../provider/toggle'
import { Div, Dislike as DislikeIcon, MainParagraph } from '../atoms'

const Dislike: React.FC<Props> = ({fill, ...props}) => {
    const query = useAppQuery('dislike')
    const {translation} = useTranslation()
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
                    {translation.components.likes.dislike}
                </MainParagraph>
            </TenIndent>
        </Div>
    )
}

type Props = Omit<NonNullable<typeof Div.defaultProps>, 'children' | 'query'> & {
    fill?: string
}

export default Dislike