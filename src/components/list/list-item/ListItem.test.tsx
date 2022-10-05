import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ListItem } from './ListItem'
import { Account } from '../../atoms'
import ToggleProvider from '../../../provider/toggle'

describe('ListItem', () => {
    test('should renders the element', () => {
        render(<ToggleProvider><ListItem>ListItem</ListItem></ToggleProvider>)
        const element = screen.getByText(/ListItem/)
        expect(element).toBeInTheDocument()
    })

    test('should containg svg', () => {
        render(
            <ToggleProvider>
                <ListItem right={<Account data-testid="svg" />}>
                    ListItem
                </ListItem>
            </ToggleProvider>
        )
        const element = screen.getByTestId('svg')
        expect(element).toBeInTheDocument()
    })
    
    test('should changes classList', () => {
        render(
            <ToggleProvider>
                <ListItem right={<Account />}>
                    ListItem
                </ListItem>
            </ToggleProvider>
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