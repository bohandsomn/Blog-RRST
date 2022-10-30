import React, { useContext } from 'react'
import { MainButton, SecondaryButton } from '@/components/atoms'
import SubscribeContext from '../../../../context/subscribe'
import useAppSelector from '../../../../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../../../../store'
import UserDataContext from 'src/feature/user-data/context/user-data'

const Subscribe: React.FC = () => {
    const subscribe = useContext(SubscribeContext)
    const authorization = useAppSelector(authorizationSelector)
    const user = useContext(UserDataContext)
    const isNotAuthorizaized = authorization.data === null && authorization.isLoading === false
    const isMyAccount = user.id === authorization.data?.id
    if (isNotAuthorizaized || isMyAccount) {
        return <></>
    }

    if (subscribe.data === null && subscribe.isLoading === false) {
        return (
            <MainButton onClick={subscribe.subscribe}>
                Subcribe
            </MainButton>
        )
    }

    return (
        <SecondaryButton onClick={subscribe.unsubscribe}>
            Unsubcribe
        </SecondaryButton>
    )
}

export default Subscribe