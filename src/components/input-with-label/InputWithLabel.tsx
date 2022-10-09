import React from 'react'
import { TenIndent } from '../../layouts/wrapper'
import { MainInput, MainParagraph } from '../atoms'

const InputWithLabel: React.FC<Props> = ({label, ...props}) => {
    return (
        <TenIndent top={<MainParagraph>{label}</MainParagraph>}>
            <MainInput {...props} />
        </TenIndent>
    )
}

type Props = NonNullable<typeof MainInput.defaultProps> & {
    label: string
}

export default InputWithLabel