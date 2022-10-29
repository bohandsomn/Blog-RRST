import React from 'react'
import { Div, Logo } from '@/components/atoms'
import useAppQuery from '../../../../hooks/useAppQuery'
import { MainContainer } from '../../../../layouts/wrapper'
import ToggleProvider from 'src/provider/toggle'
import Authentication from './authentication'
import useAppStyles from 'src/hooks/useAppStyles'

const Header: React.FC = () => {
    const query = useAppQuery('header')
    const className = useAppStyles('display-flex', 'align-items-center', 'justify-content-space-between')
    return (
        <Div query={query}>
            <MainContainer>
                <Div className={className}>
                    <ToggleProvider>
                        <Logo fill="var(--main-color)" />
                    </ToggleProvider>
                    <Authentication />
                </Div>
            </MainContainer>
        </Div>
    )
}

export default Header