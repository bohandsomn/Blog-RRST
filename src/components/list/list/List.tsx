import React from 'react'
import useAppQuery from '../../../hooks/useAppQuery'
import { SecondaryBackground } from '../../../layouts/wrapper'
import { Ul } from '../../atoms'

export const List: React.FC<Props> = ({ children, ...props }) => {
    const query = useAppQuery('list')
    return (
        <SecondaryBackground>
            <Ul query={query} {...props}>
                {children}
            </Ul>
        </SecondaryBackground>
    )
}

type Props = NonNullable<typeof Ul.defaultProps>
