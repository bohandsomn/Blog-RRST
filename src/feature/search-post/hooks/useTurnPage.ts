import { useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import PATH from '../../../path'

const useTurnPage = (page: number) => {
    const router = useRouter()
    const locale = router?.locale === undefined ? '' : '/' + router.locale
    const title = router.query.title?.toString() || ''
    const content = router.query.content?.toString() || ''

    const handleClick = useCallback(() => {
        router.push(locale + PATH.SEARCH_POSTS, {query: { page, title, content }})
    }, [router, locale, page, title, content])

    return useMemo(() => ({
        handleClick
    }), [handleClick])
}

export default useTurnPage