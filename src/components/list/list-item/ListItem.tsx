import React, { useContext } from 'react'
import Toggle from '../../../context/toggle'
import useAppStyles from '../../../hooks/useAppStyles'
import { Div, Li, MainParagraph, SecondaryParagraph } from '../../atoms'

export const ListItem: React.FC<Props> = ({ children, right, left }) => {
    const {value, handleSetTrue, handleSetFalse} = useContext(Toggle)
    const className = useAppStyles(
        'border-radius--border-radius', 
        'color--main-color', 
        'display-flex', 
        'align-items-center', 
        'justify-content-space-between', 
        'padding-top-10', 
        'padding-right-10', 
        'padding-bottom-10', 
        'padding-left-10', 
        'cursor-pointer', 
        value ? 'background-color--main-bg-color' : undefined
    )
    const rightClassName = useAppStyles('margin-left-10')
    const leftClassName = useAppStyles('margin-right-10')

    return (
        <Li className={className} onMouseEnter={handleSetTrue} onMouseLeave={handleSetFalse}>
            {left && <Div className={leftClassName}>{left}</Div>}
            {value 
                ? <SecondaryParagraph>{children}</SecondaryParagraph>
                : <MainParagraph>{children}</MainParagraph>
            }
            {right && <Div className={rightClassName}>{right}</Div>}
        </Li>
    )
}

type Props = NonNullable<typeof Li.defaultProps> & {
    right?: JSX.Element
    left?: JSX.Element
}
