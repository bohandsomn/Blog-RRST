import React from 'react'

type IToggle = {
    value: boolean
    handleToggle: () => void
    handleSetTrue: () => void
    handleSetFalse: () => void
}
const Toggle = React.createContext<IToggle>(undefined!)
export default Toggle