import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '../store/interface'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector
