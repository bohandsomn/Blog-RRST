import type { ICreatedStyle } from '../../interface'

function getMediaQuery<StyleKey extends string>(createdStyle: ICreatedStyle<StyleKey>) {
    const hasMinWidth = createdStyle.minWidth !== null
    const hasMaxWidth = createdStyle.maxWidth !== null

    const mediaQuery = `@media only screen${
        hasMinWidth ? ` and (min-width: ${createdStyle.minWidth})` : ''
    }${
        hasMaxWidth ? ` and (max-width: ${createdStyle.maxWidth})` : ''
    }`

    return mediaQuery
}

export default getMediaQuery