import splitUnit from './splitUnit'

describe('splitUnit', () => {
    test('should split number', () => {
        expect(splitUnit(100)).toEqual([100, 'px'])
    })

    test('should split string without unit', () => {
        expect(splitUnit('100')).toEqual([100, 'px'])
    })

    test('should split string with unit', () => {
        expect(splitUnit('100em')).toEqual([100, 'em'])
    })
})