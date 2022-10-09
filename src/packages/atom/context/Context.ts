import React from 'react'

const AtomContext = React.createContext<Record<string, object> | undefined>(undefined)

export default AtomContext