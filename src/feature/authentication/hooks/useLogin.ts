import { useCallback, useMemo } from 'react'
import useInput from '../../../hooks/useInput'
import useAppDispatch from '../../../hooks/useAppDispatch'
import { authorizationSlice } from '../api'
import useValidLogin from './useValidLogin'
import useValidPassword from './useValidPassword'

const useLogin = () => {
    const [login, handleChangeLogin, handleLoginReset] = useInput('')
    const [password, handleChangePassword, handlePasswordReset] = useInput('')
    const dispatch = useAppDispatch()
    const [isValidLogin, handleSetIsFocusedLoginTrue, handleSetIsFocusedLoginFalse] = useValidLogin(login)
    const [isValidPassword, handleSetIsFocusedPasswordTrue, handleSetIsFocusedPasswordFalse] = useValidPassword(password)

    const isValid: boolean = useMemo(() => {
        return isValidLogin && 
            isValidPassword && 
            !!login &&
            !!password
    }, [isValidLogin, isValidPassword, login, password])

    const handleReset = useCallback(() => {
        handleLoginReset()
        handlePasswordReset()
    }, [handleLoginReset, handlePasswordReset])

    const handleSetIsFocusedFalse = useCallback(() => {
        handleSetIsFocusedLoginFalse()
        handleSetIsFocusedPasswordFalse()
    }, [handleSetIsFocusedLoginFalse, handleSetIsFocusedPasswordFalse])

    const handleSubmit = useCallback((event: { preventDefault: () => void }) => {
        event.preventDefault()
        if (!isValid) {
            return
        }
        dispatch(authorizationSlice.login({ login, password }))
        handleReset()
        handleSetIsFocusedFalse()
    }, [isValid, dispatch, login, password, handleReset, handleSetIsFocusedFalse])

    return useMemo(() => ({
        handleSubmit,
        isValidLogin,
        handleSetIsFocusedLoginTrue,
        login,
        handleChangeLogin,
        isValidPassword,
        handleSetIsFocusedPasswordTrue,
        password,
        handleChangePassword
    }), [handleSubmit, isValidLogin, handleSetIsFocusedLoginTrue, login, handleChangeLogin, isValidPassword, handleSetIsFocusedPasswordTrue, password, handleChangePassword])
}

export default useLogin