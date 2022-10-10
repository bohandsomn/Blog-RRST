import React from 'react'
import useAppQuery from '../../../hooks/useAppQuery'
import { SecondaryBackground } from '../../../layouts/wrapper/background'
import { Ul } from '../../atoms'

export const List: React.FC<Props> = ({ children }) => {
    const query = useAppQuery('list')
    return (
        <SecondaryBackground>
            <Ul query={query}>
                {children}
            </Ul>
        </SecondaryBackground>
    )
}

type Props = NonNullable<typeof Ul.defaultProps>
