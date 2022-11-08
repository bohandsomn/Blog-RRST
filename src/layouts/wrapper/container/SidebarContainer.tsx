import React from 'react'
import { Div } from '@/components/atoms'
import useAppQuery from '../../../hooks/useAppQuery'

const SidebarContainer: React.FC<Props> = ({ children }) => {
    const query = useAppQuery('container-sidebar')
    return (
        <Div query={query}>
            {children}
        </Div>
    )
}

type Props = {
    children?: any
}

export default SidebarContainer