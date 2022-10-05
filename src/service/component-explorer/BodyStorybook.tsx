import React from 'react'
import '../../styles/global.css'

const BodyStorybook: React.FC<Props> = ({ children, theme }) => {
    return (
        <body className={theme} style={{backgroundColor: '#657178'}}>
            {children}
        </body>
    )
}

type Props = {
    children?: any
    theme: 'light' | 'dark'
}

export default BodyStorybook