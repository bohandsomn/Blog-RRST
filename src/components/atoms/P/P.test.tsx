import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { P, MainParagraph, MainBoldParagraph, MainBigParagraph, SecondaryParagraph } from './P'

describe('P', () => {
    test('should renders the element', () => {
        render(<P>Paragraph</P>)
        const element = screen.getByText(/Paragraph/)
        expect(element).toBeInTheDocument()
    })

    test('MainParagraph should renders the element', () => {
        render(<MainParagraph>MainParagraph</MainParagraph>)
        const element = screen.getByText(/MainParagraph/)
        expect(element).toBeInTheDocument()
    })
    
    test('MainBoldParagraph should renders the element', () => {
        render(<MainBoldParagraph>MainBoldParagraph</MainBoldParagraph>)
        const element = screen.getByText(/MainBoldParagraph/)
        expect(element).toBeInTheDocument()
    })
    
    test('MainBigParagraph should renders the element', () => {
        render(<MainBigParagraph>MainBigParagraph</MainBigParagraph>)
        const element = screen.getByText(/MainBigParagraph/)
        expect(element).toBeInTheDocument()
    })
    
    test('SecondaryParagraph should renders the element', () => {
        render(<SecondaryParagraph>SecondaryParagraph</SecondaryParagraph>)
        const element = screen.getByText(/SecondaryParagraph/)
        expect(element).toBeInTheDocument()
    })
})