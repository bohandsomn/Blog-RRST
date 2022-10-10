import React from 'react'
import { Div } from '../../../components/atoms'
import useAppQuery from '../../../hooks/useAppQuery'

const MainBackground: React.FC<Props> = ({ children }) => {
    const query = useAppQuery('background_main')
    return (
        <Div query={query}>
            {children}
        </Div>
    )
}

type Props = {
    children?: any
}

export default MainBackground