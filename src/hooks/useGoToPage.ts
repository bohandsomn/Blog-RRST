import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import PATH from '../path'

type UseGoToPage = {
    user: {
        id?: number | string 
    }
    seatchPosts: {
        page: string | number
        title: string
        content: string
    }
    chat: {
        id?: string | number
    }
}

const useGoToPage = ({ user, seatchPosts, chat }: Partial<UseGoToPage> = {}) => {
    const router = useRouter()
    const locale = router?.locale === undefined ? '' : '/' + router.locale

    const handleGoToHomePage = useCallback(() => {
        router.push(locale + PATH.HOME)
    }, [router.push, locale])

    const handleGoToRegistrationPage = useCallback(() => {
        router.push(locale + PATH.REGISTRATION)
    }, [locale, router.push])

    const handleGoToLogInPage = useCallback(() => {
        router.push(locale + PATH.LOG_IN)
    }, [locale, router.push])

    const handleGoToSeatchPostsPage = useCallback(() => {
        const { page, title, content } = seatchPosts || {}
        router.push(locale + PATH.SEARCH_POSTS + `/?page=${page || '1'}&title=${title || ''}&content=${content || ''}`)
    }, [router.push, locale, seatchPosts])

    const handleGoToUserPage = useCallback(() => {
        if (user?.id === undefined) {
            return
        }
        router.push(locale + PATH.USERS + `/?id=${user.id}`)
    }, [router.push, locale, user?.id])

    const handleGoToChat = useCallback(() => {
        const { id } = chat || {}
        if (id === undefined) {
            router.push(locale + PATH.CHAT)
            return
        }
        router.push(locale + PATH.CHAT + `/${id}`)
    }, [router.push, locale, chat])

    return useMemo(() => ({
        handleGoToHomePage,
        handleGoToRegistrationPage,
        handleGoToLogInPage,
        handleGoToSeatchPostsPage,
        handleGoToUserPage,
        handleGoToChat,
    }), [
        handleGoToHomePage,
        handleGoToRegistrationPage,
        handleGoToLogInPage,
        handleGoToSeatchPostsPage,
        handleGoToUserPage,
        handleGoToChat
    ])
}

export default useGoToPage