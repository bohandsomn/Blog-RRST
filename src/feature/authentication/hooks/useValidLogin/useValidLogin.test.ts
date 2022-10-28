import { renderHook, act } from '@testing-library/react-hooks'
import useInput from '../../../../hooks/useInput'
import useValidLogin from '.'

describe('useValidLogin', () => {
    test('should be initial state', () => {
        const { result } = renderHook(() => useValidLogin(''))
        const [isValid] = result.current
        expect(isValid).toBeTruthy()
    })

    test('should be unvalid after changing field', () => {
        const { result: useInputResult } = renderHook(() => useInput(''))
        const { result } = renderHook(() => useValidLogin(useInputResult.current[0]))
        act(() => {
            const [, handleSetIsFocusedTrue] = result.current
            handleSetIsFocusedTrue()
            const [, handleChange] = useInputResult.current
            handleChange({target: {value: 'DFDFRWEVS'}} as any)
        })
        const [isValid] = result.current
        expect(isValid).toBe(false)
    })

    test('should be valid after changing field', () => {
        const { result: useInputResult } = renderHook(() => useInput(''))
        const { result } = renderHook(() => useValidLogin(useInputResult.current[0]))
        act(() => {
            const [, handleSetIsFocusedEmailTrue] = result.current
            handleSetIsFocusedEmailTrue()
            const [, handleChange] = useInputResult.current
            handleChange({target: {value: 'sdgfrwerse'}} as any)
        })
        const [isValid] = result.current
        expect(isValid).not.toBe(true)
    })
})