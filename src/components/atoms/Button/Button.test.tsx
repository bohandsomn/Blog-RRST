import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from './Button'

describe('Atom Button', () => {
    test('should renders the element', () => {
        render(<Button>BUTTON</Button>)
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getByText(/BUTTON/)).toBeInTheDocument()
    })
})