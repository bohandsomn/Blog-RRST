import React from 'react'
import { Div } from '../../../components/atoms'
import useAppQuery from '../../../hooks/useAppQuery'

const SecondaryBackground: React.FC<Props> = ({ children }) => {
    const query = useAppQuery('background_secondary')
    return (
        <Div query={query}>
            {children}
        </Div>
    )
}

type Props = {
    children?: any
}

export default SecondaryBackground