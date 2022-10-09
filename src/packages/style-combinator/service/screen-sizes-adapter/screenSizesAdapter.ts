import { IAdaptedScreenSize, IScreenSize } from '../../interface'
import setWidth from '../set-width'

function screenSizesAdapter<
    PreviousScreenClass extends string, 
    CurrentScreenClass extends string, 
    NextScreenClass extends string
>(
    previous: IScreenSize<PreviousScreenClass> | undefined, 
    current: IScreenSize<CurrentScreenClass>,
    next: IScreenSize<NextScreenClass> | undefined
): IAdaptedScreenSize<CurrentScreenClass> {
    const minWidthCurrent = current.minWidth
    const maxWidthCurrent = current.maxWidth

    const minWidth = setWidth((width) => width + 1, minWidthCurrent, previous?.maxWidth)
    const maxWidth = setWidth((width) => width - 1, maxWidthCurrent, next?.minWidth)

    return {
        ...current,
        minWidth,
        maxWidth
    }
}

export default screenSizesAdapter