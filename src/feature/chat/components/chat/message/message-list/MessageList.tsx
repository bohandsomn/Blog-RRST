import React from 'react'
import { Div } from '@/components/atoms'
import useAppStyles from '../../../../../../hooks/useAppStyles'
import { MainBackground } from '../../../../../../layouts/wrapper'

const MessageList: React.FC = () => {
    const className = useAppStyles('height-583')
    return (
        <MainBackground>
            <Div className={className}>
                MessageList
            </Div>
        </MainBackground>
    )
}

export default MessageList