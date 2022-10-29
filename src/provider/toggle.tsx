import React from 'react'
import Toggle from '../context/toggle'
import useToggle from '../hooks/useToggle'

const ToggleProvider: React.FC<Props> = ({ children, initialState = false }) => {
    const [value, handleToggle, handleSetTrue, handleSetFalse] = useToggle(initialState)
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
    initialState?: boolean
}

export default ToggleProvider