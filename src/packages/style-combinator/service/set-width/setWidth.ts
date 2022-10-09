import { UNIT } from '../constants'
import splitUnit from '../split-unit'

function setWidth(
    callback: (width: number) => number, 
    current?: string | number, 
    width?: string | number
): string | null {
    if (typeof current === 'number') {
        return current + UNIT
    }
    if (current !== undefined) {
        return splitUnit(current).join('')
    }
    if (typeof width === 'number') {
        return callback(width) + UNIT
    }
    if (width === undefined) {
        return null
    }

    const [digit, unit] = splitUnit(width)
    return callback(digit) + unit
}

export default setWidth