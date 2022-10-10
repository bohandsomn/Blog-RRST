import React from 'react'
import { Div } from '../../../components/atoms'
import useAppQuery from '../../../hooks/useAppQuery'

const SecondaryContainer: React.FC<Props> = ({ children }) => {
    const query = useAppQuery('container-secondary')
    return (
        <Div query={query}>
            {children}
        </Div>
    )
}

type Props = {
    children?: any
}

export default SecondaryContainer