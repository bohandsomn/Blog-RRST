import { useStyles } from '@/packages/atom'
import STYLES from '../styles'

const useAppStyles: typeof useStyles<typeof STYLES> = useStyles

export default useAppStyles