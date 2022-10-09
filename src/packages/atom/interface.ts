import type { CSSObject, InterpolationFunction, StyledComponentPropsWithRef, ThemedStyledProps} from 'styled-components'

export type TagName = keyof JSX.IntrinsicElements

export type Props<T extends TagName> = JSX.IntrinsicElements[T] & Partial<{
    query: Query
}>
        
export type StyledProps<T extends TagName> = {
    styles: CSSObject | TemplateStringsArray | InterpolationFunction<ThemedStyledProps<StyledComponentPropsWithRef<T>, any>>
}

export type Query = Record<string, object>