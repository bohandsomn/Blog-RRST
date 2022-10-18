import STYLES from '.'
import { combinator } from '@/packages/style-combinator'

const create = combinator([
    {screenClass: 'extraSmall', maxWidth: 575},
    {screenClass: 'small', minWidth: 576},
    {screenClass: 'medium', minWidth: 768},
    {screenClass: 'large', minWidth: 992},
    {screenClass: 'extraLarge', minWidth: 1200}
])

const appCreate = <ClassName extends string>(
    ...args: Parameters<typeof create<ClassName, keyof typeof STYLES>>
) => create(...args)

export type ScreenClass = keyof Parameters<typeof create>['0']['styles'][string]

export default appCreate