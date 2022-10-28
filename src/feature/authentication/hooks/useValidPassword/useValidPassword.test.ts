import { renderHook, act } from '@testing-library/react-hooks'
import useInput from '../../../../hooks/useInput'
import useValidPassword from '.'

describe('useValidPassword', () => {
    test('should be initial state', () => {
        const { result } = renderHook(() => useValidPassword(''))
        const [isValid] = result.current
        expect(isValid).toBeTruthy()
    })

    test('should be unvalid after changing field', () => {
        const { result: useInputResult } = renderHook(() => useInput(''))
        const { result } = renderHook(() => useValidPassword(useInputResult.current[0]))
        act(() => {
            const [, handleSetIsFocusedTrue] = result.current
            handleSetIsFocusedTrue()
            const [, handleChange] = useInputResult.current
            handleChange({target: {value: ''}} as any)
        })
        const [isValidAfterEmpty] = result.current
        expect(isValidAfterEmpty).toBe(false)

        act(() => {
            const [, handleSetIsFocusedTrue] = result.current
            handleSetIsFocusedTrue()
            const [, handleChange] = useInputResult.current
            handleChange({target: {value: '3423423423423423'}} as any)
        })
        const [isValidAfterLonger] = result.current
        expect(isValidAfterLonger).toBe(false)
    })

    test('should be valid after changing field', () => {
        const { result: useInputResult } = renderHook(() => useInput(''))
        const { result } = renderHook(() => useValidPassword(useInputResult.current[0]))
        act(() => {
            const [, handleSetIsFocusedEmailTrue] = result.current
            handleSetIsFocusedEmailTrue()
            const [, handleChange] = useInputResult.current
            handleChange({target: {value: '12345'}} as any)
        })
        const [isValid] = result.current
        expect(isValid).not.toBe(true)
    })
})