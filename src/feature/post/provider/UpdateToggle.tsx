import React from 'react'
import useToggle from '../../../hooks/useToggle'
import UpdateToggle from '../context/update-toggle'

const UpdateToggleProvider: React.FC<Props> = ({ children }) => {
    const [value, handleToggle, handleSetTrue, handleSetFalse] = useToggle(false)
    const toggleValue = {
        value, 
        handleToggle, 
        handleSetTrue, 
        handleSetFalse
    }

    return (
        <UpdateToggle.Provider value={toggleValue}>
            {children}
        </UpdateToggle.Provider>
    )
}

type Props = {
    children?: any
}

export default UpdateToggleProvider