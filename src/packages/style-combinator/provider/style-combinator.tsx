import React, { useMemo } from 'react'
import StyleCombinator, { IStyleCombinator } from '../context/style-combinator'
import { ICreatedStyles } from '../interface'

const StyleCombinatorProvider: React.FC<Props> = ({ children, styles }) => {
    const value: IStyleCombinator = useMemo(() => ({
        value: styles
    }), [styles])
    return (
        <StyleCombinator.Provider value={value}>
            {children}
        </StyleCombinator.Provider>
    )
}

type Props = {
    children?: any
    styles: ICreatedStyles<any, any, any>
}

export default StyleCombinatorProvider