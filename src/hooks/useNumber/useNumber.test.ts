import { renderHook, act } from '@testing-library/react-hooks'
import useNumber from '.'

describe('useNumber', () => {
    test('should be initial state', () => {
        const { result } = renderHook(() => useNumber(10))
        const {number} = result.current
        expect(number).toBe(10)
    })

    test('should increment value', () => {
        const { result } = renderHook(() => useNumber(10, 5))
        act(() => {
            const {increment} = result.current
            increment()
        })
        const {number} = result.current
        expect(number).toBe(15)
    })

    test('should decrement value', () => {
        const { result } = renderHook(() => useNumber(10, 5))
        act(() => {
            const {decrement} = result.current
            decrement()
        })
        const {number} = result.current
        expect(number).toBe(5)
    })

    test('should reset value', () => {
        const { result } = renderHook(() => useNumber(10, 5))
        act(() => {
            const {increment, decrement, reset} = result.current
            decrement()
            decrement()
            decrement()
            increment()
            increment()
            reset()
        })
        const {number} = result.current
        expect(number).toBe(10)
    })
})