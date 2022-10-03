import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Textarea } from './Textarea'

describe('Atom Input', () => {
    test('should renders the element', () => {
        render(<Textarea />)
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })
})