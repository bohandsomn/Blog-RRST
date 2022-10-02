import useStyles from '../packages/atom/useStyles'
import STYLES from '../styles'

const useAppStyles: typeof useStyles<typeof STYLES> = (...classNames) => useStyles(...classNames)

export default useAppStyles