import React, { useEffect } from 'react'
import useAppDispatch from '../hooks/useAppDispatch'
import { getMany } from '../store/privacy'

const PrivacyProvider: React.FC<Props> = ({ children }) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getMany())
    }, [])
    return (
        <>{children}</>
    )
}

type Props = {
    children?: any
}

export default PrivacyProvider