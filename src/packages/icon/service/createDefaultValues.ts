import type { IDefaultValues } from '../interface'

function createDefaultValues<Name extends string>(defaultValues: IDefaultValues<Name>) {
    return defaultValues
}

export default createDefaultValues