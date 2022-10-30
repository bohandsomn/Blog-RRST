import { useCallback, useContext, useMemo } from 'react'
import useInput from '../../../hooks/useInput'
import UserDataContext from '../context/user-data'
import { useValidEmail, useValidLogin } from '../../authentication'
import useAppDispatch from '../../../hooks/useAppDispatch'
import useValidField from '../../../hooks/useValidField'
import useValidPrivacy from '../../../hooks/useValidPrivacy'
import { authorizationSlices } from '../api'
import DataConverter from '../../../service/data-converter'
import UpdateToggle from '../context/update-toggle'

const useUpdateUser = () => {
    const {handleSetFalse} = useContext(UpdateToggle)
    const user = useContext(UserDataContext)
    const [name, handleChangeName, handleNameReset] = useInput(user.name)
    const [surname, handleChangeSurname, handleSurnameReset] = useInput(user.surname || '')
    const [email, handleChangeEmail, handleEmailReset] = useInput(user.email)
    const [login, handleChangeLogin, handleLoginReset] = useInput(user.login)
    const [birthday, handleChangeBirthday, handleBirthdayReset] = useInput(user.birthday === null ? '' : DataConverter.getMonthDateYear(new Date(user.birthday)))
    const [privacy, handleChangePrivacy, handlePrivacyReset] = useInput('')
    const dispatch = useAppDispatch()
    const [isValidName, handleSetIsFocusedNameTrue, handleSetIsFocusedNameFalse] = useValidField(name)
    const [isValidEmail, handleSetIsFocusedEmailTrue, handleSetIsFocusedEmailFalse] = useValidEmail(email)
    const [isValidLogin, handleSetIsFocusedLoginTrue, handleSetIsFocusedLoginFalse] = useValidLogin(login)
    const {isValidPrivacy} = useValidPrivacy(privacy)

    const isValid = useMemo(() => {
        return name !== '' && 
            email !== '' && 
            login !== '' && 
            privacy !== '' &&
            isValidName && 
            isValidEmail && 
            isValidLogin && 
            isValidPrivacy
    }, [name, email, login, privacy, isValidName, isValidEmail, isValidLogin, isValidPrivacy])

    const handleReset = useCallback(() => {
        handleNameReset()
        handleSurnameReset()
        handleEmailReset()
        handleLoginReset()
        handleBirthdayReset()
        handlePrivacyReset()
    }, [handleNameReset, handleSurnameReset, handleEmailReset, handleLoginReset, handleBirthdayReset, handlePrivacyReset])

    const handleSetIsFocusedFalse = useCallback(() => {
        handleSetIsFocusedNameFalse()
        handleSetIsFocusedEmailFalse()
        handleSetIsFocusedLoginFalse()
    }, [handleSetIsFocusedNameFalse, handleSetIsFocusedEmailFalse, handleSetIsFocusedLoginFalse])

    const handleSubmit = useCallback((event: {preventDefault: () => void}) => {
        event.preventDefault()
        if (!isValid) {
            return
        }

        dispatch(
            authorizationSlices.update({
                name: name,
                surname: surname || null,
                email: email,
                login: login,
                birthday: DataConverter.getISO(new Date(birthday)),
                privacy: privacy || 'PUBLIC',
            })
        )

        handleReset()
        handleSetIsFocusedFalse()
        handleSetFalse()
    }, [isValid, dispatch, name, surname, email, login, birthday, privacy, handleReset, handleSetIsFocusedFalse, handleSetFalse])

    return useMemo(() => ({
        name,
        handleChangeName,
        surname,
        handleChangeSurname,
        email,
        handleChangeEmail,
        login,
        handleChangeLogin,
        birthday,
        handleChangeBirthday,
        privacy,
        handleChangePrivacy,
        isValidName,
        handleSetIsFocusedNameTrue,
        isValidEmail,
        handleSetIsFocusedEmailTrue,
        isValidLogin,
        handleSetIsFocusedLoginTrue,
        isValidPrivacy,
        handleSubmit,
    }), [name, handleChangeName, 
        surname, handleChangeSurname, 
        email, handleChangeEmail, 
        login, handleChangeLogin, 
        birthday, handleChangeBirthday, 
        privacy, handleChangePrivacy, 
        isValidName, handleSetIsFocusedNameTrue, 
        isValidEmail, handleSetIsFocusedEmailTrue, 
        isValidLogin, handleSetIsFocusedLoginTrue, 
        isValidPrivacy, 
        handleSubmit])
}

export default useUpdateUser