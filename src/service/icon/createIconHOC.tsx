import React, { useContext } from 'react'
import Toggle from '../../context/toggle'
import Icon from '../../packages/icon'

const createIconHOC = (MyIcon: ReturnType<typeof Icon.create>) => {
    return React.forwardRef((props: NonNullable<typeof MyIcon.defaultProps>, ref) => {
        const {value} = useContext(Toggle)

        return (
            <MyIcon 
                fill="none" 
                stroke={value ? 'var(--secondary-color)' : 'var(--main-color)'} 
                {...props} 
                ref={ref} 
            />
        )
    })
}

export default createIconHOC