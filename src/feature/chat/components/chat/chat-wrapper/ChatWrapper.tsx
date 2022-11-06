import React from 'react'
import { Div } from '@/components/atoms'
import useAppQuery from '../../../../../hooks/useAppQuery'
import { MainContainer, SecondaryBackground } from '../../../../../layouts/wrapper'
import useAppStyles from '../../../../../hooks/useAppStyles'

const ChatWrapper: React.FC<Props> = ({ children }) => {
    const query = useAppQuery('chat-wrapper')
    const className = useAppStyles('children/height-80')
    return (
        <Div className={className}>
            <MainContainer>
                <SecondaryBackground>
                    <Div query={query}>
                        {children}
                    </Div>
                </SecondaryBackground>
            </MainContainer>
        </Div>
    )
}

type Props = {
    children?: any
}

export default ChatWrapper