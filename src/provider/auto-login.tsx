import React, { useEffect } from 'react'
import useAppDispatch from '../hooks/useAppDispatch'
import { autoLogin } from '../store/authorization'

const AutoLoginProvider: React.FC<Props> = ({ children }) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(autoLogin())
    }, [])
    return (
        <>{children}</>
    )
}

type Props = {
    children?: any
}

export default AutoLoginProvider