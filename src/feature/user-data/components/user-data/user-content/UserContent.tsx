import React, { useContext, useMemo } from 'react'
import { Li, MainBigParagraph, MainBoldParagraph, MainButton, MainParagraph, Ul } from '@/components/atoms'
import UserDataContext from '../../../context/user-data'
import useAppQuery from '../../../../../hooks/useAppQuery'
import UpdateToggle from '../../../context/update-toggle'
import UserUpdate from '../user-update'
import DataConverter from 'src/service/data-converter'
import Subscribe from './subscribe'
import Chat from './chat'
import { useTranslation } from '../../../../internationalization'

const UserContent: React.FC = () => {
    const user = useContext(UserDataContext)
    const query = useAppQuery('user-content')
    const updateToggleContext = useContext(UpdateToggle)
    const dateMonthNameDataYear = useMemo(() => {
        if (user.birthday === null) {
            return
        }
        return DataConverter.getDateMonthNameDataYear(new Date(user.birthday))
    }, [user.birthday])
    const {translation} = useTranslation()

    if (updateToggleContext.value) {
        return (
            <UserUpdate />
        )
    }

    return (
        <Ul query={query}>
            <Li>
                <MainBigParagraph>
                    {user.name}
                </MainBigParagraph>
                {
                    user.surname && (
                        <MainBigParagraph>
                            &nbsp;{user.surname}
                        </MainBigParagraph>
                    )
                }
            </Li>
            {
                user.birthday && (
                    <Li>
                        <MainParagraph>
                            {translation.feature['user-data']['user-content'].birthday}
                        </MainParagraph>&nbsp;
                        <MainBoldParagraph>
                            {dateMonthNameDataYear}
                        </MainBoldParagraph>
                    </Li>
                )
            }
            <Li>
                <MainParagraph>
                    {translation.feature['user-data']['user-content'].email}
                </MainParagraph>&nbsp;
                <MainBoldParagraph>
                    {user.email}
                </MainBoldParagraph>
            </Li>
            <Li>
                <MainParagraph>
                    {translation.feature['user-data']['user-content'].login}
                </MainParagraph>&nbsp;
                <MainBoldParagraph>
                    {user.login}
                </MainBoldParagraph>
            </Li>
            <Li>
                <Chat />&nbsp;
                <Subscribe />
            </Li>
        </Ul>
    )
}

export default UserContent