import React from 'react'
import { Div } from '../../../components/atoms'
import useAppStyles from '../../../hooks/useAppStyles'

const Indent: React.FC<Props> = ({ children, indent, top, bottom, right, left }) => {
    const className = useAppStyles('display-flex', 'align-items-center')
    const rightClassName = useAppStyles(`margin-left-${indent}`)
    const leftClassName = useAppStyles(`margin-right-${indent}`)
    const topClassName = useAppStyles(`margin-bottom-${indent}`)
    const bottomClassName = useAppStyles(`margin-top-${indent}`)

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
    indent: '10' | '20'
    children?: any
    top?: JSX.Element
    bottom?: JSX.Element
    right?: JSX.Element
    left?: JSX.Element
}

export default Indent