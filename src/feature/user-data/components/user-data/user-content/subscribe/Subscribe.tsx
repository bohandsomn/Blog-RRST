import React, { useContext } from 'react'
import { MainButton, SecondaryButton } from '@/components/atoms'
import SubscribeContext from '../../../../context/subscribe'
import useAppSelector from '../../../../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../../../../store'
import UserDataContext from '../../../../context/user-data'
import { useTranslation } from '../../../../../internationalization'

const Subscribe: React.FC = () => {
    const subscribe = useContext(SubscribeContext)
    const authorization = useAppSelector(authorizationSelector)
    const user = useContext(UserDataContext)
    const {translation} = useTranslation()
    const isNotAuthorizaized = authorization.data === null && authorization.isLoading === false
    const isMatchUser = user.id === authorization.data?.id
    if (isNotAuthorizaized || isMatchUser) {
        return <></>
    }

    if (subscribe.data === null && subscribe.isLoading === false) {
        return (
            <MainButton onClick={subscribe.subscribe}>
                {translation.feature['user-data']['user-content'].subcribe}
            </MainButton>
        )
    }

    return (
        <SecondaryButton onClick={subscribe.unsubscribe}>
            {translation.feature['user-data']['user-content'].unsubcribe}
        </SecondaryButton>
    )
}

export default Subscribe