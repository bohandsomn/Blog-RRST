import React from 'react'
import Indent from './Indent'

export const TenIndent: React.FC<Props> = (props) => {
    return (
        <Indent indent="10" {...props} />
    )
}

type Props = Omit<NonNullable<typeof Indent.defaultProps>, 'indent'>
