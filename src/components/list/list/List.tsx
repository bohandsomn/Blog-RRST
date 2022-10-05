import React from 'react'
import useAppStyles from '../../../hooks/useAppStyles'
import { Ul } from '../../atoms'

export const List: React.FC<Props> = ({ children }) => {
    const className = useAppStyles(
        'border-radius--border-radius', 
        'background-color--secondary-color', 
        'display-flex', 
        'flex-direction-column', 
        'padding-top-10', 
        'padding-right-10', 
        'padding-bottom-10', 
        'padding-left-10', 
    )

    return (
        <Ul className={className}>
            {children}
        </Ul>
    )
}

type Props = NonNullable<typeof Ul.defaultProps>
