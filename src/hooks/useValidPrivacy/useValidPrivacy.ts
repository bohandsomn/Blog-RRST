import { useMemo } from 'react'
import { privacySelector } from '../../store'
import useAppSelector from '../useAppSelector'

const useValidPrivacy = (privacy: string) => {
    const privacyList = useAppSelector(privacySelector)
    const isValidPrivacy = useMemo(() => {
        return privacyList.data?.find(({ value }) => value === privacy) !== undefined
    }, [privacyList.data, privacy])
    return useMemo(() => ({
        isValidPrivacy
    }), [isValidPrivacy])
}

export default useValidPrivacy