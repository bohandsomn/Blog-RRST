import React from 'react'
import STYLES from '../../styles'
import AtomProvider from '../../packages/atom/provider'

const AtomProviderStorybook: React.FC<Props> = ({ children }) => {
    return (
        <AtomProvider styles={STYLES}>
            {children}
        </AtomProvider>
    )
}

type Props = {
    children?: any
}

export default AtomProviderStorybook