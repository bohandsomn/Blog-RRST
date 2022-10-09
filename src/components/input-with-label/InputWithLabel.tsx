import React, { useId } from 'react'
import { TenIndent } from '../../layouts/wrapper'
import { MainInput, MainParagraph } from '../atoms'
import { Label } from '../atoms/Label'

const InputWithLabel: React.FC<Props> = ({label, ...props}) => {
    const id = useId()
    return (
        <TenIndent 
            top={
                <Label htmlFor={id}>
                    <MainParagraph>
                        {label}
                    </MainParagraph>
                </Label>
            }
        >
            <MainInput id={id} {...props} />
        </TenIndent>
    )
}

type Props = NonNullable<typeof MainInput.defaultProps> & {
    label: string
}

export default InputWithLabel