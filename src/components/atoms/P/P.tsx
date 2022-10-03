import React from 'react'
import useAppStyles from '../../../hooks/useAppStyles'
import Atom from '../../../packages/atom'

export const P = Atom.create('p')

export const MainParagraph = React.forwardRef(({className, ...props}: NonNullable<typeof P.defaultProps>, ref) => {
    const localClassName = useAppStyles('color--main-color', className as undefined)
    return (
        <P className={localClassName} {...props} ref={ref} />
    )
})

export const MainBoldParagraph = React.forwardRef(({className, ...props}: NonNullable<typeof P.defaultProps>, ref) => {
    const localClassName = useAppStyles('color--main-color', 'font-weight-bold', className as undefined)
    return (
        <P className={localClassName} {...props} ref={ref} />
    )
})

export const MainBigParagraph = React.forwardRef(({className, ...props}: NonNullable<typeof P.defaultProps>, ref) => {
    const localClassName = useAppStyles('color--main-color', 'font-weight-bold', 'font-size-24', className as undefined)
    return (
        <P className={localClassName} {...props} ref={ref} />
    )
})

export const SecondaryParagraph = React.forwardRef(({className, ...props}: NonNullable<typeof P.defaultProps>, ref) => {
    const localClassName = useAppStyles('color--secondary-color', className as undefined)
    return (
        <P className={localClassName} {...props} ref={ref} />
    )
})