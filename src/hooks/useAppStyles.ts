import useStyles from '../packages/atom/hooks/useStyles'
import STYLES from '../styles'

const useAppStyles: typeof useStyles<typeof STYLES> = useStyles

export default useAppStyles