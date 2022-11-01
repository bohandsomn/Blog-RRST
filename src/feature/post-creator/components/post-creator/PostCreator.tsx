import React from 'react'
import { Form, MainBigParagraph, MainButton } from '@/components/atoms'
import InputWithLabel from '@/components/input-with-label'
import OptionsProvider from '@/components/input-list/provider/Options'
import InputList from '@/components/input-list'
import { SecondaryBackground } from '../../../../layouts/wrapper'
import useAppSelector from '../../../../hooks/useAppSelector'
import { privacySelector } from '../../../../store'
import useCreatePost from '../../hooks/useCreatePost'
import useAppStyles from 'src/hooks/useAppStyles'

const PostCreator: React.FC = () => {
    const privacyList = useAppSelector(privacySelector)
    const {
        title, handleChangeTitle,
        content, handleChangeContent,
        privacy, handleChangePrivacy,
        isValidTitle, handleSetIsFocusedTitleTrue,
        isValidContent, handleSetIsFocusedContentTrue,
        isValidPrivacy, handleSubmit
    } = useCreatePost()
    const className = useAppStyles('children/margin-bottom-10')

    return (
        <SecondaryBackground>
            <Form onSubmit={handleSubmit} className={className}>
                <MainBigParagraph>Create post</MainBigParagraph>
                <InputWithLabel 
                    label={'Enter title'} ////////////////
                    isValid={isValidTitle}
                    onFocus={handleSetIsFocusedTitleTrue}
                    value={title}
                    onChange={handleChangeTitle}
                />
                <InputWithLabel 
                    label={'Enter content'} ////////////////
                    isValid={isValidContent}
                    onFocus={handleSetIsFocusedContentTrue}
                    value={content}
                    onChange={handleChangeContent}
                />
                <OptionsProvider options={privacyList.data || []}>
                    <InputList 
                        label={'Enter privacy'} ////////////////
                        isValid={isValidPrivacy}
                        value={privacy}
                        onChange={handleChangePrivacy}
                    />
                </OptionsProvider>
                <MainButton onClick={handleSubmit}>
                    Create
                </MainButton>
            </Form>
        </SecondaryBackground>
    )
}

export default PostCreator