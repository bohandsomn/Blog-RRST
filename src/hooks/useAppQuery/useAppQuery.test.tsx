import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { StyleCombinatorProvider } from '@/packages/style-combinator'
import { AtomProvider } from '@/packages/atom'
import useAppQuery from '.'
import STYLES from 'src/styles'
import createdStyles from 'src/styles/created-styles'

describe('useAppQuery', () => {
    const wrapper: React.FC<{ children?: any }> = ({ children }) => (
        <AtomProvider styles={STYLES}>
            <StyleCombinatorProvider styles={createdStyles}>
                {children}
            </StyleCombinatorProvider>
        </AtomProvider>
    )

    test('should has a media query substring', () => {
        const { result } = renderHook(() => useAppQuery('authentication_container'), { wrapper })
        const [MEDIA_QUERY] = Object.keys(result.current)
        expect(MEDIA_QUERY).toMatch(/@media/)
    })

    test('should contain all requested styles', () => {
        const { result } = renderHook(() => useAppQuery('list'), { wrapper })
        
        expect(result.current).toEqual({
            "@media only screen and (max-width: 575px)": { },
            "@media only screen and (min-width: 1200px)": {
                "display": "flex",
                "flex-direction": "column",
            },
            "@media only screen and (min-width: 576px) and (max-width: 767px)": { },
            "@media only screen and (min-width: 768px) and (max-width: 991px)": { },
            "@media only screen and (min-width: 992px) and (max-width: 1199px)": { },
        })
    })
})