import React, { useContext, useId } from 'react'
import { Datalist, Div } from '../atoms'
import InputWithLabel from '../input-with-label'
import OptionsContext from './context/Options'

const InputList: React.FC<Props> = (props) => {
    const options = useContext(OptionsContext)
    const id = useId()

    return (
        <Div>
            <InputWithLabel list={id} {...props} />
            <Datalist id={id}>
                {
                    options.map(({ id, value }) => (
                        <option key={id} value={value}>{value}</option>
                    ))
                }
            </Datalist>
        </Div>
    )
}

type Props = Omit<NonNullable<typeof InputWithLabel.defaultProps>, 'label' | 'list'> & {
    label: string
}

export default InputList