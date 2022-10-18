import React from 'react'
import Atom from '@/packages/atom'
import useAppStyles from '../../../hooks/useAppStyles'

export const P = Atom.create('p')

export const MainParagraph = React.forwardRef(({className, ...props}: NonNullable<typeof P.defaultProps>, ref) => {
    const localClassName = useAppStyles('color--main-color', 'white-space-normal', 'word-break-break-word', className as undefined)
    return (
        <P className={localClassName} {...props} ref={ref} />
    )
})

export const MainBoldParagraph = React.forwardRef(({className, ...props}: NonNullable<typeof P.defaultProps>, ref) => {
    const localClassName = useAppStyles('color--main-color', 'font-weight-bold', 'white-space-normal', 'word-break-break-word', className as undefined)
    return (
        <P className={localClassName} {...props} ref={ref} />
    )
})

export const MainBigParagraph = React.forwardRef(({className, ...props}: NonNullable<typeof P.defaultProps>, ref) => {
    const localClassName = useAppStyles('color--main-color', 'font-weight-bold', 'font-size-24', 'white-space-normal', 'word-break-break-word', className as undefined)
    return (
        <P className={localClassName} {...props} ref={ref} />
    )
})

export const SecondaryParagraph = React.forwardRef(({className, ...props}: NonNullable<typeof P.defaultProps>, ref) => {
    const localClassName = useAppStyles('color--secondary-color', 'white-space-normal', 'word-break-break-word', className as undefined)
    return (
        <P className={localClassName} {...props} ref={ref} />
    )
})