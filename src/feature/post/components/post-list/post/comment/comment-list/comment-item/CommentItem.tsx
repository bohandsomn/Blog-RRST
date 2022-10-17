import React, { useContext } from 'react'
import { Div, Li, PreviewImg } from '../../../../../../../../components/atoms'
import WithPhoto from '../../../../../../../../components/with-photo'
import useAppQuery from '../../../../../../../../hooks/useAppQuery'
import { SecondaryBackground } from '../../../../../../../../layouts/wrapper'
import CommentContext from '../../../../../../context/comment'
import CommentContent from './comment-content'
import CommentSettings from './comment-settings'

const CommentItem: React.FC = () => {
    const query = useAppQuery('comment-item')
    const commentContext = useContext(CommentContext)
    return (
        <Li>
            <SecondaryBackground>
                <Div query={query}>
                    <WithPhoto img={
                        <PreviewImg
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}photo/user/post/${commentContext.data.userId}`}
                        />
                    }>
                        <CommentContent />
                    </WithPhoto>
                    <CommentSettings />
                </Div>
            </SecondaryBackground>
        </Li>
    )
}

export default CommentItem