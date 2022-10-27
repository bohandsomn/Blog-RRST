import React from 'react'
import { Div, MainButton } from '@/components/atoms'
import { SecondaryBackground } from 'src/layouts/wrapper'
import useRange from '../../hooks/useRange'
import Numbers from './numbers'
import useTurnPage from '../../hooks/useTurnPage'
import useAppQuery from '../../../../hooks/useAppQuery'

const Pagination: React.FC = () => {
    const { isLast, isFirst, previous, next } = useRange()
    const { handleClick: turnToPrevious } = useTurnPage(previous)
    const { handleClick: turnToNext } = useTurnPage(next)
    const query = useAppQuery('search-post__pagination')

    return (
        <SecondaryBackground>
            <Div query={query}>
                {
                    !isFirst && (
                        <MainButton onClick={turnToPrevious}>
                            Previous
                        </MainButton>
                    )
                }
                <Numbers />
                {
                    !isLast && (
                        <MainButton onClick={turnToNext}>
                            Next
                        </MainButton>
                    )
                }
            </Div>
        </SecondaryBackground>
    )
}

export default Pagination