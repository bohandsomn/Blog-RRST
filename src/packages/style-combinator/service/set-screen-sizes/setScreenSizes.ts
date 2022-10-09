import { IScreenSize } from '../../interface'
import screenSizesAdapter from '../screen-sizes-adapter'

function setScreenSizes<ScreenClass extends string>(screenSizes: IScreenSize<ScreenClass>[]) {
    return screenSizes.map((_, index) => {
        const previousScreenSize = screenSizes[index - 1]
        const currentScreenSize = screenSizes[index]
        const nextScreenSize = screenSizes[index + 1]
        
        return screenSizesAdapter(previousScreenSize, currentScreenSize, nextScreenSize)
    })
}

export default setScreenSizes