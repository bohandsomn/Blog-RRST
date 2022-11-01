import { useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import useInput from '../../../hooks/useInput'
import useGoToPage from '../../../hooks/useGoToPage'

const useSearch = () => {
    const router = useRouter()
    const [title, handleChangeTitle] = useInput(router.query.title?.toString() || '')
    const [content, handleChangeContent] = useInput(router.query.content?.toString() || '')

    const { handleGoToSeatchPostsPage } = useGoToPage({
        seatchPosts: {page: '1', title, content}
    })

    const handleSubmit = useCallback((event: {preventDefault: () => void}) => {
        event.preventDefault()
        handleGoToSeatchPostsPage()
    }, [handleGoToSeatchPostsPage])

    return useMemo(() => ({
        handleSubmit,
        title,
        handleChangeTitle,
        content,
        handleChangeContent,
    }), [handleSubmit, title, handleChangeTitle, content, handleChangeContent])
}

export default useSearch