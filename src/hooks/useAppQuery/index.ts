import { useContext, useMemo } from 'react'
import { classNameAdapter, AtomContext, Query } from '@/packages/atom'
import { useCombinedStyles, Context, ICreatedStyles, getMediaQuery } from '@/packages/style-combinator'

import STYLES from '../../styles'
import type { ScreenClass } from '../../styles/app-create'
import type { AppClassName } from '../../styles/created-styles'

const useAppQuery = <ClassName extends AppClassName>(
    className: ClassName, 
    context?: Partial<Context<keyof typeof STYLES>>
) => {
    const combinedStyles = useCombinedStyles(className) as ICreatedStyles<ClassName, ScreenClass, keyof typeof STYLES>[ClassName]
    const atomContext = useContext(AtomContext)
    return useMemo(() => {
        const styleClasses = Object.keys(combinedStyles) as ScreenClass[]
        return styleClasses.reduce((accumulator, styleClass) => {
            const createdStyle = combinedStyles[styleClass]
            const mediaQuery = getMediaQuery(createdStyle)
            const classNames = createdStyle.getClassNames(context)
            const className = classNames.join(' ')
            const styles = classNameAdapter(atomContext, className)

            return {
                ...accumulator,
                [mediaQuery]: styles
            }
        }, {} as Query)
    }, [combinedStyles, atomContext, context])
}

export default useAppQuery