import { useCallback, useContext, useMemo } from 'react'
import useAppSelector from 'src/hooks/useAppSelector'
import { privacySelector } from 'src/store'
import useInput from '../../../hooks/useInput'
import PostContext from '../context/post'
import PostListContext from '../context/post-list'
import UpdateToggle from '../context/update-toggle'

const usePostUpdate = () => {
    const {update} = useContext(PostListContext)
    const postContext = useContext(PostContext)
    const {handleSetFalse} = useContext(UpdateToggle)
    const privacyList = useAppSelector(privacySelector)

    const [title, handleChangeTitle] = useInput(postContext.title)
    const [content, handleChangeContent] = useInput(postContext.content)

    const defaultPrivacy = useMemo(() => {
        const defaultPrivacy = privacyList.data?.find((privacy) => privacy.id === postContext.privacyId)
        return defaultPrivacy?.value || ''
    }, [privacyList, postContext.privacyId])
    const [privacy, handleChangePrivacy] = useInput(defaultPrivacy)

    const handleSubmit = useCallback(async (event: {preventDefault: () => void}) => {
        event.preventDefault()

        await update({
            postId: postContext.id.toString(),
            title,
            content,
            privacy,
        })

        handleSetFalse()
    }, [update, postContext.id, title, content, privacy, handleSetFalse])

    return {
        handleSubmit,
        title,
        handleChangeTitle,
        content,
        handleChangeContent,
        privacy,
        handleChangePrivacy,
    }
}

export default usePostUpdate