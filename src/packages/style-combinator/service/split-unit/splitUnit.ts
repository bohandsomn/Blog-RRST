import { DIGIT, UNIT } from '../constants'

function splitUnit<Width extends string | number>(width: Width): [number, string] {
    if (typeof width === 'string') {
        const widthWithoutSpace = width.match(/\S/g)?.join('')
        const unit = widthWithoutSpace?.match(/\D/g)?.join('')
        const digit = widthWithoutSpace?.match(/\d/g)?.join('')
        return [parseInt(digit || DIGIT), unit || UNIT]
    }
    return [width, UNIT]
}

export default splitUnit