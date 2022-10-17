import React, { useContext } from 'react'
import { Div, Form, MainButton, PostImg } from '../../../../../../components/atoms'
import InputWithLabel from '../../../../../../components/input-with-label'
import InputList from '../../../../../../components/input-list'
import WithPhoto from '../../../../../../components/with-photo'
import useAppQuery from '../../../../../../hooks/useAppQuery'
import PostSettings from '../post-data/post-settings'
import usePostUpdate from '../../../../hooks/usePostUpdate'
import PostContext from '../../../../context/post'
import OptionsProvider from '../../../../../../components/input-list/provider/Options'
import { privacyMock } from '../../../../__mock__'

const PostUpdate: React.FC = () => {
    const query = useAppQuery('post')
    const postContext = useContext(PostContext)
    const {
        title,
        handleChangeTitle,
        content,
        handleChangeContent,
        privacy,
        handleChangePrivacy,
        handleSubmit,
    } = usePostUpdate()

    return (
        <Div query={query}>
            <WithPhoto img={
                <PostImg src={
                    `${process.env.NEXT_PUBLIC_BASE_URL}photo/user/post/${postContext.userId}`
                } />
            }>
                <Form onSubmit={handleSubmit}>
                    <InputWithLabel 
                        label={'Enter title'} 
                        value={title}
                        onChange={handleChangeTitle}
                    />handleSubmit
                    <InputWithLabel 
                        label={'Enter content'} 
                        value={content}
                        onChange={handleChangeContent}
                    />
                    <OptionsProvider options={privacyMock}>
                        <InputList 
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