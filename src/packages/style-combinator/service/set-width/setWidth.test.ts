import setWidth from './setWidth'

describe('setWidth', () => {
    test('should set the minimum width while current and width is a number', () => {
        expect(setWidth((width) => width + 1, 100, 200)).toEqual('100px')
    })

    test('should set the minimum width while current and width is a string', () => {
        expect(setWidth((width) => width + 1, '100', '200')).toEqual('100px')
    })

    test('should set the minimum width while current is a number and width is a string', () => {
        expect(setWidth((width) => width + 1, 100, '200')).toEqual('100px')
    })

    test('should set the minimum width while current is a string and width is a number', () => {
        expect(setWidth((width) => width + 1, '100', 200)).toEqual('100px')
    })

    test('should set the minimum width while current is passed and width is not passed', () => {
        expect(setWidth((width) => width + 1, 100, undefined)).toEqual('100px')
    })

    test('should set the minimum width while current is not passed and width is passed', () => {
        expect(setWidth((width) => width + 1, undefined, 100)).toEqual('101px')
    })

    
    test('should set the maximum width while current and width is a number', () => {
        expect(setWidth((width) => width - 1, 100, 200)).toEqual('100px')
    })

    test('should set the maximum width while current and width is a string', () => {
        expect(setWidth((width) => width - 1, '100', '200')).toEqual('100px')
    })

    test('should set the maximum width while current is a number and width is a string', () => {
        expect(setWidth((width) => width - 1, 100, '200')).toEqual('100px')
    })

    test('should set the maximum width while current is a string and width is a number', () => {
        expect(setWidth((width) => width - 1, '100', 200)).toEqual('100px')
    })

    test('should set the maximum width while current is passed and width is not passed', () => {
        expect(setWidth((width) => width - 1, 100, undefined)).toEqual('100px')
    })

    test('should set the maximum width while current is not passed and width is passed', () => {
        expect(setWidth((width) => width - 1, undefined, 100)).toEqual('99px')
    })
})