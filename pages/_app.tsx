import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { AtomProvider } from '@/packages/atom'
import { StyleCombinatorProvider } from '@/packages/style-combinator'
import { NotificationProvider } from '@/packages/notification'
import AutoLoginProvider from '../src/provider/auto-login'
import STYLES from '../src/styles'
import createdStyles from '../src/styles/created-styles'
import store from '../src/store'

import '../src/styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <AutoLoginProvider>
                <AtomProvider styles={STYLES}>
                    <StyleCombinatorProvider styles={createdStyles}>
                        <NotificationProvider>
                            <Component {...pageProps} />
                        </NotificationProvider>
                    </StyleCombinatorProvider>
                </AtomProvider>
            </AutoLoginProvider>
        </Provider>
    )
}