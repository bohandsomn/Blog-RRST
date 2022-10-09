import React from 'react'
import { TenIndent } from '../../layouts/wrapper'

const WithPhoto: React.FC<Props> = ({ children, img }) => {
    return (
        <TenIndent left={img}>
            {children}
        </TenIndent>
    )
}

type Props = {
    children?: any
    img: JSX.Element
}

export default WithPhoto