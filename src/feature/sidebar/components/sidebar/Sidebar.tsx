import React from 'react'
import { Div } from '@/components/atoms'
import { MainContainer, SidebarContainer } from '../../../../layouts/wrapper'
import useAppStyles from '../../../../hooks/useAppStyles'
import SidebarList from './sidebar-list'

const Sidebar: React.FC<Props> = ({ children }) => {
    const className = useAppStyles('display-flex')
    return (
        <MainContainer>
            <Div className={className}>
                <SidebarContainer>
                    <SidebarList />
                </SidebarContainer>
                {children}
            </Div>
        </MainContainer>
    )
}

type Props = {
    children?: any
}

export default Sidebar