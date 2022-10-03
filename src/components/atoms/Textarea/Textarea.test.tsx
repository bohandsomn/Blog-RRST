import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Textarea } from './Textarea'

describe('Atom Textarea', () => {
    test('should renders the element', () => {
        render(<Textarea />)
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })
})