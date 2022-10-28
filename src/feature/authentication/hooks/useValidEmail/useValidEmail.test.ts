import { renderHook, act } from '@testing-library/react-hooks'
import useInput from '../../../../hooks/useInput'
import useValidEmail from '.'

describe('useValidEmail', () => {
    test('should be initial state', () => {
        const { result } = renderHook(() => useValidEmail(''))
        const [isValid] = result.current
        expect(isValid).toBeTruthy()
    })

    test('should be unvalid after changing field', () => {
        const { result: useInputResult } = renderHook(() => useInput(''))
        const { result } = renderHook(() => useValidEmail(useInputResult.current[0]))
        act(() => {
            const [, handleSetIsFocusedTrue] = result.current
            handleSetIsFocusedTrue()
            const [, handleChange] = useInputResult.current
            handleChange({target: {value: 'UNVALID MESSAGE'}} as any)
        })
        const [isValid] = result.current
        expect(isValid).toBe(false)
    })

    test('should be valid after changing field', () => {
        const { result: useInputResult } = renderHook(() => useInput(''))
        const { result } = renderHook(() => useValidEmail(useInputResult.current[0]))
        act(() => {
            const [, handleSetIsFocusedEmailTrue] = result.current
            handleSetIsFocusedEmailTrue()
            const [, handleChange] = useInputResult.current
            handleChange({target: {value: 'email@email.em'}} as any)
        })
        const [isValid] = result.current
        expect(isValid).not.toBe(true)
    })
})