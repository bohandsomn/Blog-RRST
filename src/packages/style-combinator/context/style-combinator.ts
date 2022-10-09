import React from 'react'
import { ICreatedStyles } from '../interface'

export type IStyleCombinator = {
    value: ICreatedStyles<string, string, string>
}
const StyleCombinator = React.createContext<IStyleCombinator>(undefined!)

export default StyleCombinator