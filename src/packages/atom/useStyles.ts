import { useMemo } from 'react'

const useStyles = <
    Styles extends Record<string, object> = Record<string, object>
>(...classNames: (keyof Styles)[]) => {
    const className = useMemo(() => classNames.join(' '), [classNames])
    return className
}

export default useStyles