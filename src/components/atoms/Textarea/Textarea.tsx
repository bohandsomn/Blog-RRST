import React from 'react'
import useAppStyles from '../../../hooks/useAppStyles'
import Atom from '@/packages/atom'

export const Textarea = Atom.create('input')

export const MainTextarea = React.forwardRef(({className, ...props}: NonNullable<typeof Textarea.defaultProps>, ref) => {
    const localClassName = useAppStyles(
        'padding-top-10', 
        'padding-right-20', 
        'padding-bottom-10', 
        'padding-left-20',
        'border-none',
        'border-radius--border-radius', 
        'box-shadow--main-bg-lilear',
        'background-color--main-bg-color',
        className as undefined
    )
    return (
        <Textarea className={localClassName} {...props} ref={ref} />
    )
})
