import React, { useContext } from 'react'
import Toggle from '../../../context/toggle'
import useAppStyles from '../../../hooks/useAppStyles'
import { TenIndent } from '../../../layouts/Wrapper'
import { Div, Li, MainParagraph, SecondaryParagraph } from '../../atoms'

export const ListItem: React.FC<Props> = ({ children, right, left }) => {
    const {value, handleSetTrue, handleSetFalse} = useContext(Toggle)
    const className = useAppStyles(
        'border-radius--border-radius', 
        'color--main-color', 
        'justify-content-space-between', 
        'padding-top-10', 
        'padding-right-10', 
        'padding-bottom-10', 
        'padding-left-10', 
        'cursor-pointer', 
        value ? 'background-color--main-bg-color' : undefined
    )

    return (
        <Li className={className} onMouseEnter={handleSetTrue} onMouseLeave={handleSetFalse}>
            <TenIndent left={left} right={right}>
                {value 
                    ? <SecondaryParagraph>{children}</SecondaryParagraph>
                    : <MainParagraph>{children}</MainParagraph>
                }
            </TenIndent>
        </Li>
    )
}

type Props = NonNullable<typeof Li.defaultProps> & {
    right?: JSX.Element
    left?: JSX.Element
}
