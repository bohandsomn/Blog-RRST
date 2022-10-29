import { renderHook, act } from '@testing-library/react-hooks'
import useValidField from '.'
import useInput from '../useInput'

describe('useToggle', () => {
    test('should be initial state', () => {
        const { result } = renderHook(() => useValidField(''))
        const [isValid] = result.current
        expect(isValid).toBeTruthy()
    })

    test('should be unvalid', () => {
        const { result } = renderHook(() => useValidField(''))
        act(() => {
            const [, handleSetIsFocusedTrue] = result.current
            handleSetIsFocusedTrue()
        })
        const [isValid] = result.current
        expect(isValid).toBe(false)
    })

    test('should be valid after changing field', () => {
        const { result: useInputResult } = renderHook(() => useInput(''))
        const { result } = renderHook(() => useValidField(useInputResult.current[0]))
        act(() => {
            const [, , handleSetTrue] = result.current
            handleSetTrue()
            const [, handleChange] = useInputResult.current
            handleChange({target: {value: 'VALID MESSAGE'}} as any)
        })

        const [value] = result.current
        expect(value).toBe(true)
    })

    test('should be unvalid after changing field', () => {
        const { result: useInputResult } = renderHook(() => useInput(''))
        const { result } = renderHook(() => useValidField(useInputResult.current[0]))
        act(() => {
            const [, handleSetIsFocusedTrue] = result.current
            handleSetIsFocusedTrue()
            const [, handleChange] = useInputResult.current
            handleChange({target: {value: 'VALID MESSAGE'}} as any)
            handleChange({target: {value: ''}} as any)
        })

        const [isValid] = result.current
        expect(isValid).toBe(false)
    })

    test('should be valid after sending form', () => {
        const { result: useInputResult } = renderHook(() => useInput(''))
        const { result } = renderHook(() => useValidField(useInputResult.current[0]))
        act(() => {
            const [, handleSetIsFocusedTrue, handleSetIsFocusedFalse] = result.current
            handleSetIsFocusedTrue()
            const [, handleChange, handleReset] = useInputResult.current
            handleChange({target: {value: 'VALID MESSAGE'}} as any)

            handleSetIsFocusedFalse()
            handleReset()
        })

        const [isValid] = result.current
        expect(isValid).toBe(true)
    })
})