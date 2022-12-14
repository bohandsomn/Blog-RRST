import React from 'react'
import { Li, MainButton, SecondaryButton } from '@/components/atoms'
import useTurnPage from '../../../../hooks/useTurnPage'
import useRange from '../../../../hooks/useRange'
import useAppStyles from '../../../../../../hooks/useAppStyles'

const Number: React.FC<Props> = ({ page }) => {
    const { current } = useRange()
    const { handleClick } = useTurnPage(page)
    const className = useAppStyles('flex-1', 'display-flex', 'justify-content-center')

    return (
        <Li className={className} onClick={handleClick}>
            {
                current === page 
                    ? <SecondaryButton>{page}</SecondaryButton>
                    : <MainButton>{page}</MainButton>
            }
        </Li>
    )
}

type Props = {
    page: number
}

export default Number