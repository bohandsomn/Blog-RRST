import React from 'react'
import SubscribeContext from '../context/subscribe'
import useSubscribe from '../hooks/useSubscribe'
import type { ErrorResponse } from '../../../utility/type'
import type { SubscribeResponse } from '../interface'

const SubscribeProvider: React.FC<Props> = ({ children, subscribe }) => {
    const value = useSubscribe(subscribe)
    return (
        <SubscribeContext.Provider value={value}>
            {children}
        </SubscribeContext.Provider>
    )
}

type Props = {
    children?: any
    subscribe: ErrorResponse | SubscribeResponse.GetSubscribe
}

export default SubscribeProvider