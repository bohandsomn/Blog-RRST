import { useCallback, useMemo, useState } from 'react'
import { ICurrentSettingList } from '../context/current-setting-list'

const useCurrentSettingList = (): ICurrentSettingList => {
    const [id, setId] = useState<number | null>(null)
    const handleSetId = useCallback((id: number) => {
        return () => {
            setId(id)
        }
    }, [setId])

    return useMemo(() => ({
        id, 
        handleSetId
    }), [id, handleSetId])
}

export default useCurrentSettingList