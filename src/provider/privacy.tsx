import React, { useEffect } from 'react'
import useAppDispatch from 'src/hooks/useAppDispatch'
import { getMany } from 'src/store/privacy'

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