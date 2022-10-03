import React from 'react'
import useAppStyles from '../../../hooks/useAppStyles'
import Atom from '../../../packages/atom'

export const Button = Atom.create('button')

export const MainButton = React.forwardRef(({className, ...props}: NonNullable<typeof Button.defaultProps>, ref) => {
    const localClassName = useAppStyles(
        'padding-top-10', 
        'padding-right-20', 
        'padding-bottom-10', 
        'padding-left-20',
        'border-none',
        'border-radius--border-radius', 
        'box-shadow--main-bg-lilear',
        'background-color--secondary-color',
        'color--main-color',
        'font-weight-bold',
        className as undefined
    )
    return (
        <Button className={localClassName} {...props} ref={ref} />
    )
})
