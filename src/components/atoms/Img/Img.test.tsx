import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Img, { OriginalImg, PostImg, PreviewImg, MessageImg } from './Img'

describe('Atom Img', () => {
    test('should renders the element', () => {
        render(<Img />)
        const element = screen.getByRole('img')
        expect(element).toBeInTheDocument()
    })

    test('OriginalImg should not differ from the previous snapshot', () => {
        render(<OriginalImg />)
        const element = screen.getByRole('img')
        expect(element).toMatchSnapshot()
    })

    test('PostImg should not differ from the previous snapshot', () => {
        render(<PostImg />)
        const element = screen.getByRole('img')
        expect(element).toMatchSnapshot()
    })

    test('PreviewImg should not differ from the previous snapshot', () => {
        render(<PreviewImg />)
        const element = screen.getByRole('img')
        expect(element).toMatchSnapshot()
    })

    test('MessageImg should not differ from the previous snapshot', () => {
        render(<MessageImg />)
        const element = screen.getByRole('img')
        expect(element).toMatchSnapshot()
    })
})