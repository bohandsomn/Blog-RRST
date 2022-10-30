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
import { useTranslation } from '../../../../internationalization'

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
    const {translation} = useTranslation()

    return (
        <Form className={className} onSubmit={handleSubmit}>
            <InputWithLabel 
                label={translation.feature['user-data']['user-update'].field.name}
                isValid={isValidName}
                value={name}
                onChange={handleChangeName}
                onFocus={handleSetIsFocusedNameTrue}
                type="text"
            />
            <InputWithLabel 
                label={translation.feature['user-data']['user-update'].field.surname}
                value={surname}
                onChange={handleChangeSurname}
                type="text"
            />
            <InputWithLabel 
                label={translation.feature['user-data']['user-update'].field.email}
                isValid={isValidEmail}
                value={email}
                onChange={handleChangeEmail}
                onFocus={handleSetIsFocusedEmailTrue}
                type="email"
            />
            <InputWithLabel 
                label={translation.feature['user-data']['user-update'].field.login}
                isValid={isValidLogin}
                value={login}
                onChange={handleChangeLogin}
                onFocus={handleSetIsFocusedLoginTrue}
                type="text"
            />
            <InputWithLabel 
                label={translation.feature['user-data']['user-update'].field.birthday}
                value={birthday}
                onChange={handleChangeBirthday}
                type="date"
            />
            <OptionsProvider options={privacyList.data || []}>
                <InputList 
                    label={translation.feature['user-data']['user-update'].field.privacy}
                    isValid={isValidPrivacy}
                    value={privacy}
                    onChange={handleChangePrivacy}
                    type="text"
                />
            </OptionsProvider>
            <Div>
                <MainButton onClick={handleSubmit}>
                    {translation.feature['user-data']['user-update'].button.update}
                </MainButton>&nbsp;
                <SecondaryButton onClick={handleSetFalse}>
                    {translation.feature['user-data']['user-update'].button.cancel}
                </SecondaryButton>
            </Div>
        </Form>
    )
}

export default UserUpdate