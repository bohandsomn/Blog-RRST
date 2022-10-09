import React from 'react'
import { Div } from '../../../components/atoms'
import useAppStyles from '../../../hooks/useAppStyles'

export const TenIndent: React.FC<Props> = ({ children, top, bottom, right, left }) => {
    const className = useAppStyles('display-flex', 'align-items-center')
    const rightClassName = useAppStyles('margin-left-10')
    const leftClassName = useAppStyles('margin-right-10')
    const topClassName = useAppStyles('margin-bottom-10')
    const bottomClassName = useAppStyles('margin-top-10')

    return (
        <Div className={className}>
            {left && <Div className={leftClassName}>{left}</Div>}
            <Div>
                {top && <Div className={topClassName}>{top}</Div>}
                {children}
                {bottom && <Div className={bottomClassName}>{bottom}</Div>}
            </Div>
            {right && <Div className={rightClassName}>{right}</Div>}
        </Div>
    )
}

type Props = {
    children?: any
    top?: JSX.Element
    bottom?: JSX.Element
    right?: JSX.Element
    left?: JSX.Element
}
