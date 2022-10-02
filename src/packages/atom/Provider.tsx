import React from 'react'
import AtomContext from './Context'

const AtomProvider: React.FC<Props> = ({ styles, children }) => {
    return (
        <AtomContext.Provider value={styles}>
            {children}
        </AtomContext.Provider>
    )
}

type Props = {
    styles: Record<string, object>
    children?: any
}

export default AtomProvider