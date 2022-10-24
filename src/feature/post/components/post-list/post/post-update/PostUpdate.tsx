import React, { useContext, useMemo } from 'react'
import { Div, Form, MainButton, PostImg } from '@/components/atoms'
import InputWithLabel from '@/components/input-with-label'
import InputList from '@/components/input-list'
import WithPhoto from '@/components/with-photo'
import OptionsProvider from '@/components/input-list/provider/Options'
import useAppQuery from '../../../../../../hooks/useAppQuery'
import PostSettings from '../post-data/post-settings'
import usePostUpdate from '../../../../hooks/usePostUpdate'
import PostContext from '../../../../context/post'
import useAppSelector from '../../../../../../hooks/useAppSelector'
import { privacySelector } from '../../../../../../store'

const PostUpdate: React.FC = () => {
    const query = useAppQuery('post')
    const postContext = useContext(PostContext)
    const privacyList = useAppSelector(privacySelector)
    const {
        title,
        handleChangeTitle,
        content,
        handleChangeContent,
        privacy,
        handleChangePrivacy,
        handleSubmit,
    } = usePostUpdate()
    const isValidPrivacy = useMemo(() => privacyList.data?.find(({ value }) => value === privacy) !== undefined, [privacyList, privacy])

    return (
        <Div query={query}>
            <WithPhoto img={
                <PostImg 
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}photo/user/post/${postContext.userId}`} 
                    alt={`User-${postContext.userId}`}
                    title={'User photo'}
                />
            }>
                <Form onSubmit={handleSubmit}>
                    <InputWithLabel 
                        isValid={title !== ''}
                        label={'Enter title'} 
                        value={title}
                        onChange={handleChangeTitle}
                    />
                    <InputWithLabel 
                        isValid={content !== ''}
                        label={'Enter content'} 
                        value={content}
                        onChange={handleChangeContent}
                    />
                    <OptionsProvider options={privacyList.data || []}>
                        <InputList 
                            isValid={isValidPrivacy}
                            label={'Enter privacy'}
                            value={privacy}
                            onChange={handleChangePrivacy}
                        />
                    </OptionsProvider>
                    <MainButton type="submit" onClick={handleSubmit}>Submit</MainButton>
                </Form>
            </WithPhoto>
            <PostSettings />
        </Div>
    )
}

export default PostUpdate