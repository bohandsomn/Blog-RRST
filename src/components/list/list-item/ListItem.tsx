import React, { useContext } from 'react'
import Toggle from '../../../context/toggle'
import useAppQuery from '../../../hooks/useAppQuery'
import { TenIndent } from '../../../layouts/Wrapper'
import { Li, MainParagraph, SecondaryParagraph } from '../../atoms'

export const ListItem: React.FC<Props> = ({ children, right, left }) => {
    const {value, handleSetTrue, handleSetFalse} = useContext(Toggle)
    const query = useAppQuery('list_list-item', {
        add: value ? ['background-color--main-bg-color'] : undefined,
        remove: value ? undefined : ['background-color--main-bg-color'],
    })

    return (
        <Li query={query} onMouseEnter={handleSetTrue} onMouseLeave={handleSetFalse}>
            <TenIndent left={left} right={right}>
                {value 
                    ? <SecondaryParagraph>{children}</SecondaryParagraph>
                    : <MainParagraph>{children}</MainParagraph>
                }
            </TenIndent>
        </Li>
    )
}

type Props = NonNullable<typeof Li.defaultProps> & {
    right?: JSX.Element
    left?: JSX.Element
}
