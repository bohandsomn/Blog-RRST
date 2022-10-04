import React from 'react'
import Toggle from '../context/toggle'
import useToggle from '../hooks/useToggle'

const ToggleProvider: React.FC<Props> = ({ children }) => {
    const [value, handleToggle, handleSetTrue, handleSetFalse] = useToggle(false)
    const toggleValue = {
        value, 
        handleToggle, 
        handleSetTrue, 
        handleSetFalse
    }

    return (
        <Toggle.Provider value={toggleValue}>
            {children}
        </Toggle.Provider>
    )
}

type Props = {
    children?: any
}

export default ToggleProvider