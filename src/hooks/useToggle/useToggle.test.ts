import { renderHook, act } from '@testing-library/react-hooks'
import useToggle from '.'

describe('useToggle', () => {
    test('should be initial state', () => {
        const INITIAL_STATE = false
        const { result } = renderHook(() => useToggle(INITIAL_STATE))
        const [value] = result.current
        expect(value).toBe(INITIAL_STATE)
    })

    test('should toggle value', () => {
        const { result } = renderHook(() => useToggle(false))
        act(() => {
            const [, handleToggle] = result.current
            handleToggle()
        })
        const [value] = result.current
        expect(value).toBe(true)
    })

    test('should switch to truthy', () => {
        const { result } = renderHook(() => useToggle(false))
        act(() => {
            const [, , handleSetTrue] = result.current
            handleSetTrue()
        })
        const [value] = result.current
        expect(value).toBe(true)
    })

    test('should switch to falsy', () => {
        const { result } = renderHook(() => useToggle(true))
        act(() => {
            const [, , , handleSetTrue] = result.current
            handleSetTrue()
        })
        const [value] = result.current
        expect(value).toBe(false)
    })
})