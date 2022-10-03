import type { AppProps } from 'next/app'
import AtomProvider from '../src/packages/atom/provider'
import STYLES from '../src/styles'

import '../src/styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AtomProvider styles={STYLES}>
            <Component {...pageProps} />
        </AtomProvider>
    )
}