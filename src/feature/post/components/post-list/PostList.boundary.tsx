import React, { useContext, useCallback } from 'react'
import ErrorBoundary from '@/components/error-boundary'
import InputWithLabel from '@/components/input-with-label'
import PostListContext from '../../context/post-list'
import useInput from 'src/hooks/useInput'

const PostListBoundary: React.FC<Props> = ({ children }) => {
    const [title, handleChangeTitle] = useInput('')
    const [content, handleChangeContent] = useInput('')

    const postListContext = useContext(PostListContext)
    const onReload = useCallback(() => postListContext.addMany({
        title,
        content,
        privacy: 'PUBLIC',
        page: '1',
    }), [postListContext.addMany])
    const onCancel = useCallback(() => {
        return postListContext.onSuccess(postListContext.previous || [])
    }, [postListContext.onSuccess, postListContext.previous])
    
    if (!postListContext.data && !postListContext.isLoading) {
        return (
            <ErrorBoundary 
                error={postListContext.error!} 
                onReload={onReload}
                onCancel={postListContext.previous !== null ? onCancel : undefined}
            >
                <InputWithLabel 
                    label={'Title'} 
                    value={title}
                    onChange={handleChangeTitle}
                    placeholder={'Enter title'}
                />
                <InputWithLabel 
                    label={'Content'} 
                    value={content}
                    onChange={handleChangeContent}
                    placeholder={'Enter content'}
                />
            </ErrorBoundary>
        )
    }

    return (
        children
    )
}

type Props = {
    children?: any
}

export default PostListBoundary