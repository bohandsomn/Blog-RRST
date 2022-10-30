import React from 'react'
import SubscribeContext from '../context/subscribe'
import useSubscribe from '../hooks/useSubscribe'

const SubscribeProvider: React.FC<Props> = ({ children }) => {
    const value = useSubscribe()
    return (
        <SubscribeContext.Provider value={value}>
            {children}
        </SubscribeContext.Provider>
    )
}

type Props = {
    children?: any
}

export default SubscribeProvider