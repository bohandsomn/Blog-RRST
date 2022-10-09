import { Context } from '../../interface'

function changeStyles<StyleKey extends string>(styles: StyleKey[]) {
    const setStyles = new Set<StyleKey>(styles)
    return (context?: Partial<Context<StyleKey>>) => {
        const addStyles = context?.add
        const removeStyles = context?.remove

        addStyles?.forEach((style) => setStyles.add(style))
        removeStyles?.forEach((style) => setStyles.delete(style))

        return [...setStyles] as StyleKey[]
    }
}

export default changeStyles