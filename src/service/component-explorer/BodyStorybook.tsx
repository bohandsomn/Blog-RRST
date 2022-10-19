import React from 'react'
import '../../styles/global.css'

const BodyStorybook: React.FC<Props> = ({ children, theme }) => {
    return (
        <body className={theme}>
            {children}
        </body>
    )
}

type Props = {
    children?: any
    theme: 'light' | 'dark'
}

export default BodyStorybook