import React from 'react'
import { Cancel, Div } from '@/components/atoms'
import useAppQuery from '../../../../../hooks/useAppQuery'
import { MainContainer, SecondaryBackground } from '../../../../../layouts/wrapper'
import useAppStyles from '../../../../../hooks/useAppStyles'
import ToggleProvider from 'src/provider/toggle'
import useGoToPage from 'src/hooks/useGoToPage'

const ChatWrapper: React.FC<Props> = ({ children }) => {
    const query = useAppQuery('chat-wrapper')
    const className = useAppStyles('children/height-80')
    const classNameCancel = useAppStyles('cursor-pointer')
    const { handleGoToHomePage } = useGoToPage()
    return (
        <Div className={className}>
            <MainContainer>
                <SecondaryBackground>
                    <Div query={query}>
                        {children}
                        <ToggleProvider>
                            <Cancel className={classNameCancel} onClick={handleGoToHomePage} />
                        </ToggleProvider>
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