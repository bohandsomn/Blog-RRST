import { useCallback, useContext, useMemo } from 'react'
import useInput from '../../../hooks/useInput'
import PostContext from '../context/post'
import PostListContext from '../context/post-list'
import UpdateToggle from '../context/update-toggle'
import { privacyMock } from '../__mock__'

const usePostUpdate = () => {
    const {update} = useContext(PostListContext)
    const postContext = useContext(PostContext)
    const {handleSetFalse} = useContext(UpdateToggle)

    const [title, handleChangeTitle] = useInput(postContext.title)
    const [content, handleChangeContent] = useInput(postContext.content)

    const defaultPrivacy = useMemo(() => {
        for (const privacy of privacyMock) {
            if (privacy.id === postContext.privacyId) {
                return privacy.value
            }
        }

        return ''
    }, [privacyMock, postContext.privacyId])
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