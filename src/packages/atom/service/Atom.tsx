import React, { useContext, useMemo } from 'react'
import styled, { ThemedStyledFunction } from 'styled-components'
import AtomContext from '../context/Context'
import type { Props, TagName, StyledProps } from '../interface'

class Atom {
    static create<T extends TagName>(tagName: T) {
        const Component = this.styled(tagName) as any
        return React.forwardRef<unknown, Props<T>>(({ className, ...props }, ref) => {
            const atomContext = useContext(AtomContext)
            const styles = useMemo(() => {
                const classNames = className?.split(' ')

                return classNames?.reduce((accumulator, currentClassName) => {
                    return {
                        ...accumulator,
                        ...atomContext?.[currentClassName]
                    }
                }, {}) || {}
            }, [atomContext, className])

            return (
                <Component 
                    styles={styles} 
                    ref={ref} 
                    {...props} 
                />
            )
        }) 
    }

    static styled<T extends TagName>(tagName: T) {
        const themedStyledFunction = styled[tagName] as never as ThemedStyledFunction<T, any, {}, never>
        return themedStyledFunction<StyledProps<T>>(({ styles }) => styles) 
    }
}

export default Atom
