import { useCallback, useMemo } from 'react'
import useAppDispatch from '../../../hooks/useAppDispatch'
import useAppSelector from '../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../store'
import { authorizationSlices } from '../api'
import useGoToPage from '../../../hooks/useGoToPage'

const useNavigation = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(authorizationSelector)

    const { handleGoToHomePage, handleGoToUserPage, handleGoToSeatchPostsPage, handleGoToChat } = useGoToPage({
        user: {id: user.data?.id}
    })

    const handleGoToLogoutPage = useCallback(() => {
        dispatch(authorizationSlices.logout())
    }, [dispatch])

    return useMemo(() => ({
        handleGoToHomePage,
        handleGoToUserPage,
        handleGoToSeatchPostsPage,
        handleGoToLogoutPage, 
        handleGoToChat
    }), [handleGoToHomePage, handleGoToUserPage, handleGoToSeatchPostsPage, handleGoToLogoutPage, handleGoToChat])
}

export default useNavigation