import React from 'react'
import { SecondaryBackground, TenIndent, TwentyIndent } from '../../../src/layouts/wrapper'
import { MainBigParagraph, MainButton, SecondaryButton } from '../atoms'

const ErrorBoundary: React.FC<Props> = ({
    error,
    onReload,
    onCancel
}) => {
    return (
        <SecondaryBackground>
            <TwentyIndent 
                top={<MainBigParagraph>{error}</MainBigParagraph>}
                bottom={
                    <TenIndent 
                        left={<MainButton onClick={onReload}>Reload</MainButton>}
                        right={<SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>}
                    />
                }
            />
        </SecondaryBackground>
    )
}

type Props = {
    error: string
    onReload: React.MouseEventHandler<HTMLButtonElement>
    onCancel: React.MouseEventHandler<HTMLButtonElement>
}

export default ErrorBoundary