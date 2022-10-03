import { useMemo } from 'react'

const useStyles = <
    Styles extends Record<string, object> = Record<string, object>
>(...classNames: (keyof Styles | '' | undefined)[]) => {
    const className = useMemo(() => {
        return classNames
            .filter((className) => typeof className === 'string')
            .join(' ')
    }, [classNames])
    return className
}

export default useStyles