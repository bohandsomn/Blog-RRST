import React from 'react'
import Atom from '@/packages/atom'
import useAppStyles from '../../../hooks/useAppStyles'

export const Img = Atom.create('img')

type SeoProps = Omit<NonNullable<typeof Img.defaultProps>, 'alt' | 'title' | 'src'> & {
    alt: string
    title: string
    src: string
}

export const OriginalImg = React.forwardRef(({className, ...props}: SeoProps, ref) => {
    const localClassName = useAppStyles('display-flex', 'border-radius-50%', 'background-color-button-shadow', className as undefined)
    return (
        <Img className={localClassName} ref={ref} width={200} height={200} {...props} />
    )
}) 

export const PostImg = React.forwardRef(({className, ...props}: SeoProps, ref) => {
    const localClassName = useAppStyles('display-flex', 'border-radius-50%', 'background-color-button-shadow', className as undefined)
    return (
        <Img className={localClassName} ref={ref} width={75} height={75} {...props} />
    )
}) 

export const PreviewImg = React.forwardRef(({className, ...props}: SeoProps, ref) => {
    const localClassName = useAppStyles('display-flex', 'border-radius-50%', 'background-color-button-shadow', className as undefined)
    return (
        <Img className={localClassName} ref={ref} width={60} height={60} {...props} />
    )
}) 

export const MessageImg = React.forwardRef(({className, ...props}: SeoProps, ref) => {
    const localClassName = useAppStyles('display-flex', 'border-radius-50%', 'background-color-button-shadow', className as undefined)
    return (
        <Img className={localClassName} ref={ref} width={20} height={20} {...props} />
    )
})
