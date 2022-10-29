import React from 'react'
import CurrentSettingList from '../context/current-setting-list'
import useCurrentSettingList from '../hooks/useCurrentSettingList'

const CurrentSettingListProvider: React.FC<Props> = ({ children }) => {
    const value = useCurrentSettingList()
    return (
        <CurrentSettingList.Provider value={value}>
            {children}
        </CurrentSettingList.Provider>
    )
}

type Props = {
    children?: any
}

export default CurrentSettingListProvider