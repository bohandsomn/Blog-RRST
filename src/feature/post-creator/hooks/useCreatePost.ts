import { useCallback, useContext, useMemo } from 'react'
import useValidField from '../../../hooks/useValidField'
import useValidPrivacy from '../../../hooks/useValidPrivacy'
import useInput from '../../../hooks/useInput'
import { PostListContext } from '../../post'

const useCreatePost = () => {
    const [title, handleChangeTitle, handleResetTitle] = useInput('')
    const [content, handleChangeContent, handleResetContent] = useInput('')
    const [privacy, handleChangePrivacy, handleResetPrivacy] = useInput('PUBLIC')
    const postListContext = useContext(PostListContext)
    const [isValidTitle, handleSetIsFocusedTitleTrue, handleSetIsFocusedTitleFalse] = useValidField(title)
    const [isValidContent, handleSetIsFocusedContentTrue, handleSetIsFocusedContentFalse] = useValidField(content)
    const {isValidPrivacy} = useValidPrivacy(privacy)

    const isValid: boolean = useMemo(() => {
        return isValidTitle && 
            isValidContent && 
            isValidPrivacy && 
            !!title &&
            !!content &&
            !!privacy
    }, [isValidTitle, isValidContent, isValidPrivacy, title, content, privacy])

    const handleReset = useCallback(() => {
        handleResetTitle()
        handleResetContent()
        handleResetPrivacy()
    }, [handleResetTitle, handleResetContent, handleResetPrivacy])

    const handleSetIsFocusedFalse = useCallback(() => {
        handleSetIsFocusedTitleFalse()
        handleSetIsFocusedContentFalse()
    }, [handleSetIsFocusedTitleFalse, handleSetIsFocusedContentFalse])

    const handleSubmit = useCallback((event: { preventDefault: () => void }) => {
        event.preventDefault()
        if (!isValid) {
            return
        }
        postListContext.create({
            title,
            content,
            privacy
        })
        handleReset()
        handleSetIsFocusedFalse()
    }, [isValid, postListContext.create, title, content, privacy, handleReset, handleSetIsFocusedFalse])

    return useMemo(() => ({
        title, handleChangeTitle,
        content, handleChangeContent,
        privacy, handleChangePrivacy,
        isValidTitle, handleSetIsFocusedTitleTrue,
        isValidContent, handleSetIsFocusedContentTrue,
        isValidPrivacy, handleSubmit
    }), [
        title, handleChangeTitle,
        content, handleChangeContent,
        privacy, handleChangePrivacy,
        isValidTitle, handleSetIsFocusedTitleTrue,
        isValidContent, handleSetIsFocusedContentTrue,
        isValidPrivacy, handleSubmit
    ])
}

export default useCreatePost