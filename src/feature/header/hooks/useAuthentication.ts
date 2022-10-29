import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import PATH from '../../../path'

const useAuthentication = () => {
    const router = useRouter()
    const locale = router?.locale === undefined ? '' : '/' + router.locale

    const handleGoToRegistrationPage = useCallback(() => {
        router.push(locale + PATH.REGISTRATION)
    }, [locale, router.push])

    const handleGoToLogInPage = useCallback(() => {
        router.push(locale + PATH.LOG_IN)
    }, [locale, router.push])

    return useMemo(() => ({
        handleGoToRegistrationPage,
        handleGoToLogInPage
    }), [handleGoToRegistrationPage, handleGoToLogInPage])
}

export default useAuthentication