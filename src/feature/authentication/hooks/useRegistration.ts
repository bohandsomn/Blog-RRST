import { useCallback, useMemo } from 'react'
import useInput from '../../../hooks/useInput'
import useAppDispatch from '../../../hooks/useAppDispatch'
import { authorizationSlice } from '../api'
import useValidLogin from './useValidLogin'
import useValidEmail from './useValidEmail'
import useValidPassword from './useValidPassword'
import useValidField from '../../../hooks/useValidField'

const useRegistration = () => {
    const [name, handleChangeName, handleNameReset] = useInput('')
    const [email, handleChangeEmail, handleEmailReset] = useInput('')
    const [login, handleChangeLogin, handleLoginReset] = useInput('')
    const [password, handleChangePassword, handlePasswordReset] = useInput('')
    const dispatch = useAppDispatch()
    const [isValidLogin, handleSetIsFocusedLoginTrue, handleSetIsFocusedLoginFalse] = useValidLogin(login)
    const [isValidName, handleSetIsFocusedNameTrue, handleSetIsFocusedNameFalse] = useValidField(name)
    const [isValidEmail, handleSetIsFocusedEmailTrue, handleSetIsFocusedEmailFalse] = useValidEmail(email)
    const [isValidPassword, handleSetIsFocusedPasswordTrue, handleSetIsFocusedPasswordFalse] = useValidPassword(password)

    const isValid: boolean = useMemo(() => {
        return isValidLogin && 
            isValidName && 
            isValidEmail && 
            isValidPassword && 
            !!name &&
            !!email &&
            !!login &&
            !!password
    }, [isValidLogin, isValidName, isValidEmail, isValidPassword, name, email, login, password])

    const handleReset = useCallback(() => {
        handleNameReset()
        handleEmailReset()
        handleLoginReset()
        handlePasswordReset()
    }, [handleNameReset, handleEmailReset, handleLoginReset, handlePasswordReset])

    const handleSetIsFocusedFalse = useCallback(() => {
        handleSetIsFocusedLoginFalse()
        handleSetIsFocusedNameFalse()
        handleSetIsFocusedEmailFalse()
        handleSetIsFocusedPasswordFalse()
    }, [handleSetIsFocusedLoginFalse, handleSetIsFocusedNameFalse, handleSetIsFocusedEmailFalse, handleSetIsFocusedPasswordFalse])

    const handleSubmit = useCallback((event: { preventDefault: () => void }) => {
        event.preventDefault()
        if (!isValid) {
            return
        }
        dispatch(authorizationSlice.registration({ name, email, login, password}))
        handleReset()
        handleSetIsFocusedFalse()
    }, [isValid, dispatch, name, email, login, password, handleSetIsFocusedFalse, handleReset])

    return useMemo(() => ({
        handleSubmit,
        isValidName,
        handleSetIsFocusedNameTrue,
        name,
        handleChangeName,
        isValidEmail,
        handleSetIsFocusedEmailTrue,
        email,
        handleChangeEmail,
        isValidLogin,
        handleSetIsFocusedLoginTrue,
        login,
        handleChangeLogin,
        isValidPassword,
        handleSetIsFocusedPasswordTrue,
        password,
        handleChangePassword,
    }), [handleSubmit, isValidName, handleSetIsFocusedNameTrue, name, handleChangeName, isValidEmail, handleSetIsFocusedEmailTrue, email, handleChangeEmail, isValidLogin, handleSetIsFocusedLoginTrue, login, handleChangeLogin, isValidPassword, handleSetIsFocusedPasswordTrue, password, handleChangePassword])
}

export default useRegistration