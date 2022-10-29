import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DropDownList from './DropDownList'
import { List } from '../list'
import { AtomProvider } from '@/packages/atom'
import { StyleCombinatorProvider } from '@/packages/style-combinator'
import STYLES from 'src/styles'
import createdStyles from 'src/styles/created-styles'
import ToggleProvider from 'src/provider/toggle'

describe('Molecule DropDownList', () => {
    test('should renders chevron', () => {
        render(
            <AtomProvider styles={STYLES}>
                <StyleCombinatorProvider styles={createdStyles}>
                    <ToggleProvider>
                        <DropDownList chevron="CHEVRON" />
                    </ToggleProvider>
                </StyleCombinatorProvider>
            </AtomProvider>
        )
        expect(screen.getByText(/CHEVRON/)).toBeInTheDocument()
    })

    test('should renders list', () => {
        render(
            <AtomProvider styles={STYLES}>
                <StyleCombinatorProvider styles={createdStyles}>
                    <ToggleProvider>
                        <DropDownList chevron="CHEVRON">
                            <List>
                                <p>First list item</p>
                                <p>Second list item</p>
                                <p>Third list item</p>
                                <p>Fourth list item</p>
                            </List>
                        </DropDownList>
                    </ToggleProvider>
                </StyleCombinatorProvider>
            </AtomProvider>
        )

        expect(screen.queryByText(/First list item/)).toBeNull()
        fireEvent.mouseEnter(screen.getByText(/CHEVRON/))
        expect(screen.queryByText(/First list item/)).not.toBeNull()
        fireEvent.mouseLeave(screen.getByText(/CHEVRON/))
        expect(screen.queryByText(/First list item/)).toBeNull()
    })
})