import React from 'react'
import { Div, MainBoldParagraph, MainButton, PreviewImg, SecondaryButton } from '@/components/atoms'
import WithPhoto from '@/components/with-photo'
import useAppStyles from '../../../../../hooks/useAppStyles'
import useAppSelector from '../../../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../../../store'
import useAuthentication from '../../../hooks/useAuthentication'

const Authentication: React.FC = () => {
    const user = useAppSelector(authorizationSelector)
    const className = useAppStyles('children/margin-right-10')
    const { handleGoToRegistrationPage, handleGoToLogInPage } = useAuthentication()

    if (user.data) {
        return (
            <WithPhoto 
                img={
                    <PreviewImg 
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}photo/user/preview/${user.data.id}`}
                        alt={`${user.data.name} ${user.data.surname || ''}`}
                        title={'User'}
                    />
                }
            >
                <MainBoldParagraph>
                    {user.data.name}&nbsp;
                    {user.data.surname || ''}
                </MainBoldParagraph>
            </WithPhoto>
        )
    }

    return (
        <Div className={className}>
            <MainButton onClick={handleGoToRegistrationPage}>Registration</MainButton>
            <SecondaryButton onClick={handleGoToLogInPage}>Log in</SecondaryButton>
        </Div>
    )
}

export default Authentication