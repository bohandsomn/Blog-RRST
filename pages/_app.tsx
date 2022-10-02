import type { AppProps } from 'next/app'
import AtomProvider from '../src/packages/atom/Provider'
import STYLES from '../src/styles'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AtomProvider styles={STYLES}>
            <Component {...pageProps} />
        </AtomProvider>
    )
}