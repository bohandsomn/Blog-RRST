import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { AtomProvider } from '@/packages/atom'
import { StyleCombinatorProvider } from '@/packages/style-combinator'
import { NotificationProvider } from '@/packages/notification'
import AutoLoginProvider from '../src/provider/auto-login'
import PrivacyProvider from '../src/provider/privacy'
import STYLES from '../src/styles'
import createdStyles from '../src/styles/created-styles'
import store from '../src/store'
import Header from '../src/feature/header'

import '../src/styles/global.css'
import 'react-loading-skeleton/dist/skeleton.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <AutoLoginProvider>
                <PrivacyProvider>
                    <AtomProvider styles={STYLES}>
                        <StyleCombinatorProvider styles={createdStyles}>
                            <NotificationProvider>
                                <Header />
                                <Component {...pageProps} />
                            </NotificationProvider>
                        </StyleCombinatorProvider>
                    </AtomProvider>
                </PrivacyProvider>
            </AutoLoginProvider>
        </Provider>
    )
}