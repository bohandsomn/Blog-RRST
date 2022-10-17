import React from 'react'
import { TwentyIndent } from '../../layouts/wrapper'

const WithPhoto: React.FC<Props> = ({ children, img }) => {
    return (
        <TwentyIndent left={img}>
            {children}
        </TwentyIndent>
    )
}

type Props = {
    children?: any
    img: JSX.Element
}

export default WithPhoto