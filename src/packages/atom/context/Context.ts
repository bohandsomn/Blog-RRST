import React from 'react'

const AtomContext = React.createContext<Record<string, object> | void>(undefined)

export default AtomContext