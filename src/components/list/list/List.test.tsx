import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { AtomProvider } from '@/packages/atom'
import { StyleCombinatorProvider } from '@/packages/style-combinator'
import { List } from './List'
import { Account } from '../../atoms'
import ToggleProvider from '../../../provider/toggle'
import { ListItem } from '../list-item'
import STYLES from 'src/styles'
import createdStyles from 'src/styles/created-styles'

describe('ListItem', () => {
    test('should renders the element', () => {
        render(
            <AtomProvider styles={STYLES}>
                <StyleCombinatorProvider styles={createdStyles}>
                    <List>
                        <ToggleProvider>
                            <ListItem right={<Account />}>Account</ListItem>
                        </ToggleProvider>
                    </List>
                </StyleCombinatorProvider>
            </AtomProvider>
        )
        const element = screen.getByText(/Account/)
        expect(element).toBeInTheDocument()
    })

    test('should containg svg', () => {
        render(
            <AtomProvider styles={STYLES}>
                <StyleCombinatorProvider styles={createdStyles}>
                    <List>
                        <ToggleProvider>
                            <ListItem right={<Account data-testid="svg" />}>Account</ListItem>
                        </ToggleProvider>
                    </List>
                </StyleCombinatorProvider>
            </AtomProvider>
        )
        const element = screen.getByTestId('svg')
        expect(element).toBeInTheDocument()
    })
    
    test('shouldn\'t changes snapshots', () => {
        render(
            <AtomProvider styles={STYLES}>
                <StyleCombinatorProvider styles={createdStyles}>
                    <List>
                        <ToggleProvider>
                            <ListItem right={<Account />}>Account</ListItem>
                        </ToggleProvider>
                    </List>
                </StyleCombinatorProvider>
            </AtomProvider>
        )
        const element = screen.getByRole('list')
        expect(element).toMatchSnapshot()
    })
})