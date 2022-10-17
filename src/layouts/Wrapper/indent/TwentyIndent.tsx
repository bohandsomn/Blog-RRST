import React from 'react'
import Indent from '../indent/Indent'

export const TwentyIndent: React.FC<Props> = (props) => {
    return (
        <Indent indent="20" {...props} />
    )
}

type Props = Omit<NonNullable<typeof Indent.defaultProps>, 'indent'>
