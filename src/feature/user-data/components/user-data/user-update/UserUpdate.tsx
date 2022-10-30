import React, { useContext } from 'react'
import { Div, Form, MainButton, SecondaryButton } from '@/components/atoms'
import InputList from '@/components/input-list'
import OptionsProvider from '@/components/input-list/provider/Options'
import InputWithLabel from '@/components/input-with-label'
import useAppSelector from '../../../../../hooks/useAppSelector'
import { privacySelector } from '../../../../../store'
import useAppStyles from '../../../../../hooks/useAppStyles'
import useUpdateUser from '../../../hooks/useUpdateUser'
import UpdateToggle from '../../../context/update-toggle'

const UserUpdate: React.FC = () => {
    const privacyList = useAppSelector(privacySelector)
    const className = useAppStyles('children/margin-bottom-10')
    const {
        name, handleChangeName,
        surname, handleChangeSurname,
        email, handleChangeEmail,
        login, handleChangeLogin,
        birthday, handleChangeBirthday,
        privacy, handleChangePrivacy,
        isValidName, handleSetIsFocusedNameTrue,
        isValidEmail, handleSetIsFocusedEmailTrue,
        isValidLogin, handleSetIsFocusedLoginTrue,
        isValidPrivacy, 
        handleSubmit,
    } = useUpdateUser()
    const {handleSetFalse} = useContext(UpdateToggle)

    return (
        <Form className={className} onSubmit={handleSubmit}>
            <InputWithLabel 
                label="Enter your name"
                isValid={isValidName}
                value={name}
                onChange={handleChangeName}
                onFocus={handleSetIsFocusedNameTrue}
                type="text"
            />
            <InputWithLabel 
                label="Enter your surname"
                value={surname}
                onChange={handleChangeSurname}
                type="text"
            />
            <InputWithLabel 
                label="Enter your email"
                isValid={isValidEmail}
                value={email}
                onChange={handleChangeEmail}
                onFocus={handleSetIsFocusedEmailTrue}
                type="email"
            />
            <InputWithLabel 
                label="Enter your login"
                isValid={isValidLogin}
                value={login}
                onChange={handleChangeLogin}
                onFocus={handleSetIsFocusedLoginTrue}
                type="text"
            />
            <InputWithLabel 
                label="Enter your birthday"
                value={birthday}
                onChange={handleChangeBirthday}
                type="date"
            />
            <OptionsProvider options={privacyList.data || []}>
                <InputList 
                    label="Enter your privacy"
                    isValid={isValidPrivacy}
                    value={privacy}
                    onChange={handleChangePrivacy}
                    type="text"
                />
            </OptionsProvider>
            <Div>
                <MainButton onClick={handleSubmit}>
                    Update
                </MainButton>&nbsp;
                <SecondaryButton onClick={handleSetFalse}>
                    Cancel
                </SecondaryButton>
            </Div>
        </Form>
    )
}

export default UserUpdate