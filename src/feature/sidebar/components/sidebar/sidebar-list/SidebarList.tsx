import React from 'react'
import { Account, Div, Home, LogOut, Search } from '@/components/atoms'
import { List, ListItem } from '@/components/list'
import ToggleProvider from '../../../../../provider/toggle'
import useAppQuery from '../../../../../hooks/useAppQuery'
import useNavigation from '../../../hooks/useNavigation'
import useAppSelector from '../../../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../../../store'
import { useTranslation } from '../../../../internationalization'

const SidebarList: React.FC = () => {
    const query = useAppQuery('sidebar')
    const { handleGoToHomePage, handleGoToUserPage, handleGoToSeatchPostsPage, handleGoToLogoutPage } = useNavigation()
    const user = useAppSelector(authorizationSelector)
    const { translation } = useTranslation()

    return (
        <Div query={query}>
            <List>
                <ToggleProvider>
                    <ListItem right={<Home />} onClick={handleGoToHomePage}>
                        {translation.feature.sidebar.list.home}
                    </ListItem>
                </ToggleProvider>
                {
                    user.data && (
                        <ToggleProvider>
                            <ListItem right={<Account />} onClick={handleGoToUserPage}>
                                {translation.feature.sidebar.list.user}
                            </ListItem>
                        </ToggleProvider>
                    )
                }
                <ToggleProvider>
                    <ListItem right={<Search />} onClick={handleGoToSeatchPostsPage}>
                        {translation.feature.sidebar.list['search-posts']}
                    </ListItem>
                </ToggleProvider>
                {
                    user.data && (
                        <ToggleProvider>
                            <ListItem right={<LogOut />} onClick={handleGoToLogoutPage}>
                                {translation.feature.sidebar.list['log-out']}
                            </ListItem>
                        </ToggleProvider>
                    )
                }
            </List>
        </Div>
    )
}

export default SidebarList