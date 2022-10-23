import React from 'react'
import useAppStyles from '../../hooks/useAppStyles'
import { SecondaryBackground, TenIndent, TwentyIndent } from '../../../src/layouts/wrapper'
import { Div, MainBigParagraph, MainButton, SecondaryButton } from '../atoms'

const ErrorBoundary: React.FC<Props> = ({
    error,
    onReload,
    onCancel,
    children
}) => {
    const className = useAppStyles('children/margin-bottom-10')
    return (
        <SecondaryBackground>
            <TwentyIndent 
                top={<MainBigParagraph>{error}</MainBigParagraph>}
                children={<Div className={className}>{children}</Div>}
                bottom={
                    <TenIndent 
                        left={<MainButton onClick={onReload}>Reload</MainButton>}
                        right={
                            onCancel && (
                                <SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>
                            )
                        }
                    />
                }
            />
        </SecondaryBackground>
    )
}

type Props = {
    error: string
    onReload: React.MouseEventHandler<HTMLButtonElement>
    onCancel?: React.MouseEventHandler<HTMLButtonElement>
    children?: any
}

export default ErrorBoundary