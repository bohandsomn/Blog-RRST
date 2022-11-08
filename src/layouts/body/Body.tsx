import React from 'react'

export const Body: React.FC<Props> = ({ children }) => {
    return (
        <body className="light">
            {children}
        </body>
    )
}

type Props = {
    children?: any
}