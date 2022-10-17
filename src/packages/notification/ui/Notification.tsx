import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const NotificationProvider: React.FC<Props> = ({ children }) => {
    return (
        <>
            {children}
            <ToastContainer />
        </>
    )
}

type Props = {
    children?: any
}

export default NotificationProvider