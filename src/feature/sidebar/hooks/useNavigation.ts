import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import useAppDispatch from '../../../hooks/useAppDispatch'
import useAppSelector from '../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../store'
import PATH from '../../../path'
import { authorizationSlices } from '../api'

const useNavigation = () => {
    const router = useRouter()
    const locale = router?.locale === undefined ? '' : '/' + router.locale
    const dispatch = useAppDispatch()
    const user = useAppSelector(authorizationSelector)

    const handleGoToHomePage = useCallback(() => {
        router.push(locale + PATH.HOME)
    }, [router.push, locale])
    const handleGoToUserPage = useCallback(() => {
        if (user.data?.id === undefined) {
            return
        }
        router.push(locale + PATH.USERS + `/?id=${user.data.id}`)
    }, [router.push, locale, user.data?.id])
    const handleGoToSeatchPostsPage = useCallback(() => {
        router.push(locale + PATH.SEARCH_POSTS)
    }, [router.push, locale])
    const handleGoToLogoutPage = useCallback(() => {
        dispatch(authorizationSlices.logout())
    }, [dispatch])

    return useMemo(() => ({
        handleGoToHomePage,
        handleGoToUserPage,
        handleGoToSeatchPostsPage,
        handleGoToLogoutPage
    }), [handleGoToHomePage, handleGoToUserPage, handleGoToSeatchPostsPage, handleGoToLogoutPage])
}

export default useNavigation