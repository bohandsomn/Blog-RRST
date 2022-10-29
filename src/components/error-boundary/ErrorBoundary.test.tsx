import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ErrorBoundary from './ErrorBoundary'
import { List } from '../list'
import { AtomProvider } from '@/packages/atom'
import { StyleCombinatorProvider } from '@/packages/style-combinator'
import STYLES from 'src/styles'
import createdStyles from 'src/styles/created-styles'
import ToggleProvider from 'src/provider/toggle'

describe('Molecule ErrorBoundary', () => {
    let error: string
    let onReload: (...args: any[]) => any
    let onCancel: (...args: any[]) => any

    beforeEach(() => {
        error = 'ERROR_MESSAGE'
        onReload = jest.fn()
        onCancel = jest.fn()
    })

    test('should contains error message', () => {
        render(
            <AtomProvider styles={STYLES}>
                <StyleCombinatorProvider styles={createdStyles}>
                    <ToggleProvider>
                        <ErrorBoundary 
                            error={error}
                            onReload={onReload}
                            onCancel={onCancel}
                        />
                    </ToggleProvider>
                </StyleCombinatorProvider>
            </AtomProvider>
        )

        expect(screen.getByText(/ERROR_MESSAGE/)).toBeInTheDocument()
    })

    test('should calls callbacks', () => {
        render(
            <AtomProvider styles={STYLES}>
                <StyleCombinatorProvider styles={createdStyles}>
                    <ToggleProvider>
                        <ErrorBoundary 
                            error={error}
                            onReload={onReload}
                            onCancel={onCancel}
                        />
                    </ToggleProvider>
                </StyleCombinatorProvider>
            </AtomProvider>
        )

        expect(screen.getByText(/ERROR_MESSAGE/)).toBeInTheDocument()
        fireEvent.click(screen.getByText(/Reload/))
        expect(onReload).toBeCalledTimes(1)
        
        fireEvent.click(screen.getByText(/Cancel/))
        expect(onCancel).toBeCalledTimes(1)
    })
})