import { useRouter } from 'next/router'
import { useCallback, useContext, useMemo } from 'react'
import PATH from '../../../path'
import useAppSelector from '../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../store'
import UserDataContext from '../context/user-data'

const useChat = () => {
    const router = useRouter()
    const locale = router?.locale === undefined ? '' : '/' + router.locale
    const user = useContext(UserDataContext)
    const authorization = useAppSelector(authorizationSelector)
    const isMatchUser = user.id === authorization.data?.id

    const handleGoToChat = useCallback(() => {
        if (authorization.data?.id === undefined) {
            return
        }
        router.push(locale + PATH.PRIVATE_CHAT + `/${user.id}/${authorization.data.id}`)
    }, [authorization.data?.id, router.push, locale, user.id])

    return useMemo(() => ({
        isMatchUser,
        handleGoToChat
    }), [isMatchUser, handleGoToChat])
}

export default useChat