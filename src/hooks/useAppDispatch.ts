import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../store/interface'

const useAppDispatch: () => AppDispatch = useDispatch

export default useAppDispatch
