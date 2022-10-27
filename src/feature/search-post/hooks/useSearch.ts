import { useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import useInput from '../../../hooks/useInput'
import PATH from '../../../path'

const useSearch = () => {
    const router = useRouter()
    const locale = router?.locale === undefined ? '' : '/' + router.locale
    const [title, handleChangeTitle] = useInput(router.query.title?.toString() || '')
    const [content, handleChangeContent] = useInput(router.query.content?.toString() || '')

    const handleSubmit = useCallback((event: {preventDefault: () => void}) => {
        event.preventDefault()
        
        router.push(locale + PATH.SEARCH_POSTS, {query: { page: '1', title, content }})
    }, [router, locale, title, content])

    return useMemo(() => ({
        handleSubmit,
        title,
        handleChangeTitle,
        content,
        handleChangeContent,
    }), [handleSubmit, title, handleChangeTitle, content, handleChangeContent])
}

export default useSearch