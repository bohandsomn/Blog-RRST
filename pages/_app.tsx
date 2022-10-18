import type { AppProps } from 'next/app'
import { AtomProvider } from '@/packages/atom'
import { StyleCombinatorProvider } from '@/packages/style-combinator'
import STYLES from '../src/styles'
import createdStyles from '../src/styles/created-styles'

import '../src/styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AtomProvider styles={STYLES}>
            <StyleCombinatorProvider styles={createdStyles}>
                <Component {...pageProps} />
            </StyleCombinatorProvider>
        </AtomProvider>
    )
}