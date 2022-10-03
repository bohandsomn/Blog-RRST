export type IDefaultValue = {
    d: string | string[] 
    viewBox: string
    width: number
    height: number
}

export type IDefaultValues<Name extends string> = Record<Name, IDefaultValue>