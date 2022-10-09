export type IScreenSize<ScreenClass extends string> = {
    minWidth?: number | string
    maxWidth?: number | string
    screenClass: ScreenClass
}

export type ICreatedStyle<StyleKey extends string> = {
    minWidth: string | null
    maxWidth: string | null
    getClassNames: (context?: Partial<Context<StyleKey>>) => StyleKey[]
}

export type ICreatedStyles<
    ClassName extends string,
    ScreenClass extends string, 
    StyleKey extends string
> = Record<
    ClassName, 
    Record<
        ScreenClass,
        ICreatedStyle<StyleKey>
    >
>

export type IStyle<
    ScreenClass extends string, 
    StyleKey extends string
> = Record<
    ScreenClass, 
    StyleKey[]
>

export type IStyles<
    ClassName extends string, 
    ScreenClass extends string, 
    StyleKey extends string
> = Record<ClassName, IStyle<ScreenClass, StyleKey>>

export type ICreate<
    ClassName extends string, 
    ScreenClass extends string, 
    StyleKey extends string
> = {
    styles: IStyles<ClassName, ScreenClass, StyleKey>
}

export type IAdaptedScreenSize<ScreenClass extends string> = {
    minWidth: string | null
    maxWidth: string | null
    screenClass: ScreenClass
}

export type Context<StyleKey extends string> = {
    add: StyleKey[],
    remove: StyleKey[]
}