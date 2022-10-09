import React from 'react'
import useAppQuery from '../../../hooks/useAppQuery'
import { Ul } from '../../atoms'

export const List: React.FC<Props> = ({ children }) => {
    const query = useAppQuery('list')
    return (
        <Ul query={query}>
            {children}
        </Ul>
    )
}

type Props = NonNullable<typeof Ul.defaultProps>
