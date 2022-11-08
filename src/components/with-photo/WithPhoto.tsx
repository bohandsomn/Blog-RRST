import React from 'react'
import { TwentyIndent } from '../../layouts/wrapper'

const WithPhoto: React.FC<Props> = ({ children, img, right = false }) => {
    return (
        <TwentyIndent 
            left={!right ? img : undefined}
            right={right ? img : undefined}
        >
            {children}
        </TwentyIndent>
    )
}

type Props = {
    children?: any
    right?: boolean
    img: JSX.Element
}

export default WithPhoto