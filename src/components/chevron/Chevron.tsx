import React, { useContext } from 'react'
import Toggle from '../../context/toggle'
import useAppQuery from '../../hooks/useAppQuery'
import { TenIndent } from '../../layouts/Wrapper'
import { ChevronDown, MainParagraph } from '../atoms'

const Chevron: React.FC<Props> = ({ children }) => {
    const {value, handleSetTrue, handleSetFalse} = useContext(Toggle)
    const query = useAppQuery('chevron')

    return (
        <TenIndent right={value ? undefined : <ChevronDown />}>
            <MainParagraph query={query} onMouseEnter={handleSetTrue} onMouseLeave={handleSetFalse}>
                {children}
            </MainParagraph>
        </TenIndent>
    )
}

type Props = {
    children?: any
}

export default Chevron