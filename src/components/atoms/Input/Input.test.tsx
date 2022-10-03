import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Input } from './Input'

describe('Atom Input', () => {
    test('should renders the element', () => {
        render(<Input />)
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })
})