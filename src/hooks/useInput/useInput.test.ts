import { renderHook, act } from '@testing-library/react-hooks'
import useInput from '.'

describe('useInput', () => {
    test('should be initial state', () => {
        const INITIAL_STATE = ''
        const { result } = renderHook(() => useInput(INITIAL_STATE))
        const [value] = result.current

        expect(value).toBe(INITIAL_STATE)
    })

    test('should updates value', () => {
        const MESSAGE = 'NEW MESSAGE'
        const { result } = renderHook(() => useInput(MESSAGE))

        act(() => {
            const [ , handleChange] = result.current
            handleChange({ target: {value: MESSAGE} } as any)
        })

        const [value] = result.current

        expect(value).toBe(MESSAGE)
    })

    test('should reset to initial state', () => {
        const INITIAL_STATE = ''
        const { result } = renderHook(() => useInput(INITIAL_STATE))

        act(() => {
            const [ , handleChange, handleReset] = result.current
            handleChange({ target: {value: 'FIRST MESSAGE'} } as any)
            handleChange({ target: {value: 'SECOND MESSAGE'} } as any)

            handleReset()
        })

        const [value] = result.current

        expect(value).toBe(INITIAL_STATE)
    })
})