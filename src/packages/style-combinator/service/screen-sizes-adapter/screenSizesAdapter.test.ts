import screenSizesAdapter from './screenSizesAdapter'

describe('screenSizesAdapter', () => {
    test('should adapt first screen size', () => {
        const previousScreenClass = undefined
        const currentScreenClass = {screenClass: 'extraSmall' as const, maxWidth: 575}
        const nextScreenClass = {screenClass: 'small' as const, minWidth: 576}

        expect(
            screenSizesAdapter(
                previousScreenClass, 
                currentScreenClass, 
                nextScreenClass
            )
        ).toEqual({
            screenClass: 'extraSmall' as const,
            minWidth: null,
            maxWidth: '575px'
        })
    })

    test('should adapt last screen size', () => {
        const previousScreenClass = {screenClass: 'large', minWidth: 992}
        const currentScreenClass = {screenClass: 'extraLarge' as const, minWidth: 1200}
        const nextScreenClass = undefined

        expect(
            screenSizesAdapter(
                previousScreenClass, 
                currentScreenClass, 
                nextScreenClass
            )
        ).toEqual({
            screenClass: 'extraLarge' as const,
            minWidth: '1200px',
            maxWidth: null
        })
    })

    test('should adapt center screen size, while passed min width', () => {
        const previousScreenClass = { screenClass: 'small' as const, minWidth: 576 }
        const currentScreenClass = { screenClass: 'medium' as const, minWidth: 768 }
        const nextScreenClass = { screenClass: 'large' as const, minWidth: 992 }

        expect(
            screenSizesAdapter(
                previousScreenClass, 
                currentScreenClass, 
                nextScreenClass
            )
        ).toEqual({
            screenClass: 'medium' as const,
            minWidth: '768px',
            maxWidth: '991px'
        })
    })

    test('should adapt center screen size, while passed max width', () => {
        const previousScreenClass = { screenClass: 'small' as const, maxWidth: 767 }
        const currentScreenClass = { screenClass: 'medium' as const, maxWidth: 991 }
        const nextScreenClass = { screenClass: 'large' as const, maxWidth: 1199 }

        expect(
            screenSizesAdapter(
                previousScreenClass, 
                currentScreenClass, 
                nextScreenClass
            )
        ).toEqual({
            screenClass: 'medium' as const,
            minWidth: '768px',
            maxWidth: '991px'
        })
    })

    test('should adapt screen size, while previous max width not passed', () => {
        const previousScreenClass = { screenClass: 'small' as const, maxWidth: undefined }
        const currentScreenClass = { screenClass: 'medium' as const, maxWidth: 991 }
        const nextScreenClass = { screenClass: 'large' as const, maxWidth: 1199 }

        expect(
            screenSizesAdapter(
                previousScreenClass, 
                currentScreenClass, 
                nextScreenClass
            )
        ).toEqual({
            screenClass: 'medium' as const,
            minWidth: null,
            maxWidth: '991px'
        })
    })

    test('should adapt screen size, while next min width not passed', () => {
        const previousScreenClass = { screenClass: 'small' as const, minWidth: 576 }
        const currentScreenClass = { screenClass: 'medium' as const, minWidth: 768 }
        const nextScreenClass = { screenClass: 'large' as const, minWidth: undefined }

        expect(
            screenSizesAdapter(
                previousScreenClass, 
                currentScreenClass, 
                nextScreenClass
            )
        ).toEqual({
            screenClass: 'medium' as const,
            minWidth: '768px',
            maxWidth: null
        })
    })
})