import React from 'react'
import Atom from '@/packages/atom'
import useAppStyles from '../../../hooks/useAppStyles'

export const Input = Atom.create('input')

export const MainInput = React.forwardRef(({className, isValid = true, ...props}: Props, ref) => {
    const unValidClassName = useAppStyles('border-style-solid', 'border-width-2', 'border-color-red', 'color-red')
    const localClassName = useAppStyles(
        'padding-top-10', 
        'padding-right-20', 
        'padding-bottom-10', 
        'padding-left-20',
        'border-none',
        'border-radius--border-radius', 
        'box-shadow--main-bg-lilear',
        'background-color--main-bg-color',
        className as undefined,
        isValid 
            ? undefined
            : unValidClassName as any
    )
    return (
        <Input className={localClassName} {...props} ref={ref} />
    )
})

type Props = NonNullable<typeof Input.defaultProps> & {
    isValid?: boolean
}
