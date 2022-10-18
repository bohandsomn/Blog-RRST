import React, { useContext } from 'react'
import Icon from '@/packages/icon'
import Toggle from '../../context/toggle'

const createIconHOC = (MyIcon: ReturnType<typeof Icon.create>) => {
    return React.forwardRef(({fill='none', ...props}: NonNullable<typeof MyIcon.defaultProps>, ref) => {
        const {value} = useContext(Toggle)

        return (
            <MyIcon 
                fill={fill} 
                stroke={value ? 'var(--secondary-color)' : 'var(--main-color)'} 
                {...props} 
                ref={ref} 
            />
        )
    })
}

export default createIconHOC