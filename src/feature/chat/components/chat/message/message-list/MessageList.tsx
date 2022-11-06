import React from 'react'
import { Div } from '@/components/atoms'
import useAppStyles from '../../../../../../hooks/useAppStyles'

const MessageList: React.FC = () => {
    const className = useAppStyles('height-643')
    return (
        <Div className={className}>
            MessageList
        </Div>
    )
}

export default MessageList