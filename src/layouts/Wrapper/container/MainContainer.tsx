import React from 'react'
import { Div } from '@/components/atoms'
import useAppQuery from '../../../hooks/useAppQuery'

const MainContainer: React.FC<Props> = ({ children }) => {
    const query = useAppQuery('container-main')
    return (
        <Div query={query}>
            {children}
        </Div>
    )
}

type Props = {
    children?: any
}

export default MainContainer