import React, { useContext } from 'react'
import Toggle from '../../context/toggle'
import { TenIndent } from '../../layouts/wrapper'
import { Div } from '../atoms'
import Chevron from '../chevron'
import { List } from '../list'
import useAppStyles from '../../hooks/useAppStyles'

const DropDownList: React.FC<Props> = ({ chevron, children }) => {
    const {value, handleSetTrue, handleSetFalse} = useContext(Toggle)
    const className = useAppStyles('position-absolute')
    return (
        <Div className={className} onMouseEnter={handleSetTrue} onMouseLeave={handleSetFalse}>
            <TenIndent bottom={value ? <List>{children}</List> : undefined}>
                <Chevron>{chevron}</Chevron>
            </TenIndent>
        </Div>
    )
}

type Props = {
    chevron: string
    children?: any
}

export default DropDownList