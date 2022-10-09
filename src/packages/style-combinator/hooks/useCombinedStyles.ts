import { useContext, useMemo } from 'react'
import StyleCombinator from '../context/style-combinator'

const useCombinedStyles = <StyleKey extends string>(className: StyleKey) => {
    const {value} = useContext(StyleCombinator)
    const styles = useMemo(() => value[className], [value, className])
    return styles
}

export default useCombinedStyles