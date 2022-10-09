import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { List } from './List'
import { Account } from '../../atoms'
import ToggleProvider from '../../../provider/toggle'
import { ListItem } from '../list-item'

describe('ListItem', () => {
    test('should renders the element', () => {
        render(
            <List>
                <ToggleProvider>
                    <ListItem right={<Account />}>Account</ListItem>
                </ToggleProvider>
            </List>
        )
        const element = screen.getByText(/Account/)
        expect(element).toBeInTheDocument()
    })

    test('should containg svg', () => {
        render(
            <List>
                <ToggleProvider>
                    <ListItem right={<Account data-testid="svg" />}>Account</ListItem>
                </ToggleProvider>
            </List>
        )
        const element = screen.getByTestId('svg')
        expect(element).toBeInTheDocument()
    })
    
    test('shouldn\'t changes snapshots', () => {
        render(
            <List>
                <ToggleProvider>
                    <ListItem right={<Account />}>Account</ListItem>
                </ToggleProvider>
            </List>
        )
        const element = screen.getByRole('list')
        expect(element).toMatchSnapshot()
    })
})