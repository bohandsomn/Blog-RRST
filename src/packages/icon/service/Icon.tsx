import React, { useMemo } from 'react'
import Path from '../ui/Path'
import Svg from '../ui/Svg'
import type { IDefaultValue } from '../interface'

class Icon {
    public static create({ d, ...defaultValue }: IDefaultValue) {
        const isArray = Array.isArray(d)

        return React.forwardRef((props: Props, ref) => {
            const properties = useMemo(() => ({...defaultValue, ...props}), [props])

            return (
                <Svg ref={ref} {...properties}>
                    {
                        isArray 
                            ? d.map((string) => (
                                <Path key={string} d={string} />
                            ))
                            : <Path d={d} />
                    }
                </Svg>
            )
        })
    }
}

type Props = NonNullable<typeof Svg.defaultProps>

export default Icon
