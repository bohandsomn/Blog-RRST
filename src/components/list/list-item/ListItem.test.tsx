import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { AtomProvider } from '@/packages/atom'
import { StyleCombinatorProvider } from '@/packages/style-combinator'
import { ListItem } from './ListItem'
import { Account } from '../../atoms'
import ToggleProvider from '../../../provider/toggle'
import STYLES from 'src/styles'
import createdStyles from 'src/styles/created-styles'

describe('ListItem', () => {
    test('should renders the element', () => {
        render(
            <AtomProvider styles={STYLES}>
                <StyleCombinatorProvider styles={createdStyles}>
                    <ToggleProvider>
                        <ListItem>ListItem</ListItem>
                    </ToggleProvider>
                </StyleCombinatorProvider>
            </AtomProvider>
        )
        const element = screen.getByText(/ListItem/)
        expect(element).toBeInTheDocument()
    })

    test('should containg svg', () => {
        render(
            <AtomProvider styles={STYLES}>
                <StyleCombinatorProvider styles={createdStyles}>
                    <ToggleProvider>
                        <ListItem right={<Account data-testid="svg" />}>
                            ListItem
                        </ListItem>
                    </ToggleProvider>
                </StyleCombinatorProvider>
            </AtomProvider>
        )
        const element = screen.getByTestId('svg')
        expect(element).toBeInTheDocument()
    })
    
    test('should changes classList', () => {
        render(
            <AtomProvider styles={STYLES}>
                <StyleCombinatorProvider styles={createdStyles}>
                    <ToggleProvider>
                        <ListItem right={<Account />}>
                            ListItem
                        </ListItem>
                    </ToggleProvider>
                </StyleCombinatorProvider>
            </AtomProvider>
        )
        const initialElement = screen.getByText(/ListItem/)
        fireEvent.mouseEnter(initialElement)
        expect(initialElement).toMatchSnapshot()

        const afterEnterElement = screen.getByText(/ListItem/)
        fireEvent.mouseLeave(afterEnterElement)
        expect(afterEnterElement).toMatchSnapshot()

        const afterLeaveElement = screen.getByText(/ListItem/)
        expect(afterLeaveElement).toMatchSnapshot()
    })
})