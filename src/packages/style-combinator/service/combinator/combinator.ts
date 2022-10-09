import setScreenSizes from '../set-screen-sizes'
import changeStyles from '../change-styles'
import type { ICreate, ICreatedStyle, ICreatedStyles, IScreenSize, IStyle } from '../../interface'

function combinator<ScreenClass extends string>(screenSizes: IScreenSize<ScreenClass>[]) {
    const adaptedScreenSizes = setScreenSizes<ScreenClass>(screenSizes)

    return function create<ClassName extends string, StyleKey extends string>({
        styles
    }: ICreate<ClassName, ScreenClass, StyleKey>): ICreatedStyles<ClassName, ScreenClass, StyleKey> {
        const classNames = Object.keys(styles) as ClassName[]
        return classNames.reduce((accumulator, className) => {
            const style: IStyle<ScreenClass, StyleKey> = styles[className]
            const createdStyles = adaptedScreenSizes.reduce((accumulator, {screenClass, minWidth, maxWidth}) => ({
                ...accumulator,
                [screenClass]: {
                    minWidth,
                    maxWidth,
                    getClassNames: changeStyles(style[screenClass])
                } as ICreatedStyle<StyleKey>
            }), {} as ICreatedStyles<ClassName, ScreenClass, StyleKey>)
            return {
                ...accumulator, 
                [className]: createdStyles
            }
        }, {} as ICreatedStyles<ClassName, ScreenClass, StyleKey>)
    }
}

export default combinator