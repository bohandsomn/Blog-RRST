import React from 'react'
import useAppStyles from '../../../hooks/useAppStyles'
import Atom from '../../../packages/atom'

const Img = Atom.create('img')

export const OriginalImg = React.forwardRef((props: NonNullable<typeof Img.defaultProps>, ref) => {
    const className = useAppStyles('border-radius-50%', 'background-color-button-shadow')
    return (
        <Img className={`${props.className || ''} ${className}`} ref={ref} width={200} height={200} {...props} />
    )
}) 

export const PostImg = React.forwardRef((props: NonNullable<typeof Img.defaultProps>, ref) => {
    const className = useAppStyles('border-radius-50%', 'background-color-button-shadow')
    return (
        <Img className={`${props.className || ''} ${className}`} ref={ref} width={75} height={75} {...props} />
    )
}) 

export const PreviewImg = React.forwardRef((props: NonNullable<typeof Img.defaultProps>, ref) => {
    const className = useAppStyles('border-radius-50%', 'background-color-button-shadow')
    return (
        <Img className={`${props.className || ''} ${className}`} ref={ref} width={60} height={60} {...props} />
    )
}) 

export const MessageImg = React.forwardRef((props: NonNullable<typeof Img.defaultProps>, ref) => {
    const className = useAppStyles('border-radius-50%', 'background-color-button-shadow')
    return (
        <Img className={`${props.className || ''} ${className}`} ref={ref} width={20} height={20} {...props} />
    )
}) 

export default Img