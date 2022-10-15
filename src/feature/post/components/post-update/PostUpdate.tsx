import React from 'react'
import { Div } from '../../../../components/atoms'
import useAppQuery from '../../../../hooks/useAppQuery'

const PostUpdate: React.FC = () => {
    const query = useAppQuery('post')

    return (
        <Div query={query}>

        </Div>
    )
}

export default PostUpdate