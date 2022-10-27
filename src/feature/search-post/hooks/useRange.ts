import { useContext, useMemo } from 'react'
import { useRouter } from 'next/router'
import PostListContext from '../context/post-list'

const useRange = () => {
    const RANGE_LENGTH = 9
    const MAX_LENGTH = 5
    const FIRST_PAGE = 1
    const MIDDLE_PAGE = Math.round(RANGE_LENGTH / 2)
    const router = useRouter()
    const postListContext = useContext(PostListContext)

    const currentPage = useMemo(() => typeof router.query.page === 'string' ? parseInt(router.query.page) : 1, [router.query.page])
    const previousPage = currentPage - 1
    const nextPage = currentPage + 1
    const dataLength = postListContext.data?.length || 0
    const isFirstPage = currentPage === FIRST_PAGE
    const isLastPage = dataLength !== MAX_LENGTH
    const leftIndent = currentPage <= MIDDLE_PAGE 
        ? FIRST_PAGE 
        : currentPage - (MIDDLE_PAGE - 1)

    const range = useMemo(() => {
        return Array
            .from<number>({ length: RANGE_LENGTH })
            .map((_, index) => {
                return index + leftIndent
            })
    }, [RANGE_LENGTH, leftIndent])

    return useMemo(() => ({
        isFirst: isFirstPage,
        isLast: isLastPage,
        range,
        previous: previousPage,
        next: nextPage,
        current: currentPage
    }), [isFirstPage, isLastPage, range, previousPage, nextPage, currentPage])
}

export default useRange