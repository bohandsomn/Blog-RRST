import React, { useContext } from 'react'
import Toggle from '../../context/toggle'
import useAppQuery from '../../hooks/useAppQuery'
import { TenIndent } from '../../layouts/wrapper'
import ToggleProvider from '../../provider/toggle'
import { MoreVertical } from '../atoms'
import { List } from '../list'

const SettingsList: React.FC<Props> = ({ children }) => {
    const {value, handleToggle} = useContext(Toggle)
    const query = useAppQuery('settings-list')
    
    return (
        <TenIndent bottom={value ? <List>{children}</List> : undefined}>
            <ToggleProvider>
                <MoreVertical query={query} onClick={handleToggle} />
            </ToggleProvider>
        </TenIndent>
    )
}

type Props = {
    children?: any
}

export default SettingsList