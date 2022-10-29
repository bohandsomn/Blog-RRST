import React from 'react'
import { Ul } from '@/components/atoms'
import useRange from '../../../hooks/useRange'
import Number from './number'
import useAppStyles from '../../../../../hooks/useAppStyles'

const Numbers: React.FC = () => {
    const { range } = useRange()
    const className = useAppStyles('display-flex', 'width-100%')

    return (
        <Ul className={className}>
            {
                range.map((page) => (
                    <Number key={page} page={page} />
                ))
            }
        </Ul>
    )
}

export default Numbers