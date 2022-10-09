import React from 'react'
import STYLES from '../../styles'
import AtomProvider from '../../packages/atom/provider'
import { StyleCombinatorProvider } from '../../packages/style-combinator'
import createdStyles from '../../styles/created-styles'

const AtomProviderStorybook: React.FC<Props> = ({ children }) => {
    return (
        <AtomProvider styles={STYLES}>
            <StyleCombinatorProvider styles={createdStyles}>
                {children}
            </StyleCombinatorProvider>
        </AtomProvider>
    )
}

type Props = {
    children?: any
}

export default AtomProviderStorybook