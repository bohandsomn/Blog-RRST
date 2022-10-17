import React from 'react'
import OptionsContext, { IOptions } from '../context/Options'

const OptionsProvider: React.FC<Props> = ({ children, options }) => {
    return (
        <OptionsContext.Provider value={options}>
            {children}
        </OptionsContext.Provider>
    )
}

type Props = {
    children?: any
    options: IOptions
}

export default OptionsProvider