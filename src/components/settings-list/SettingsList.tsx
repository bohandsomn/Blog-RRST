import React, { useContext } from 'react'
import Toggle from '../../context/toggle'
import useAppQuery from '../../hooks/useAppQuery'
import useAppStyles from '../../hooks/useAppStyles'
import { TenIndent } from '../../layouts/wrapper'
import ToggleProvider from '../../provider/toggle'
import { Div, MoreVertical } from '../atoms'
import { List } from '../list'

const SettingsList: React.FC<Props> = ({ children }) => {
    const {value, handleToggle} = useContext(Toggle)
    const query = useAppQuery('settings-list')
    const className = useAppStyles('position-absolute')
    
    return (
        <TenIndent 
            bottom={
                value && children
                    ? (
                        <Div className={className}>
                            <List>
                                {children}
                            </List>
                        </Div>
                    ) 
                    : undefined
            }
        >
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