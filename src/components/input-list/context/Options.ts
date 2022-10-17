import React from 'react'

export type IOptions = {
    id: number,
    value: string,
}[]
const OptionsContext = React.createContext<IOptions>([])
export default OptionsContext