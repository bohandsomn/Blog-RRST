import React from 'react'

export type ICurrentSettingList = {
    id: number | null
    handleSetId: (id: number) => () => void
}
const CurrentSettingList = React.createContext<ICurrentSettingList>(undefined!)

export default CurrentSettingList