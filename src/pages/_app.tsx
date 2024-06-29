import '@/styles/globals.css'
import '@/styles/styles.css'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/lib/i18n'

export type TNextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type TAppPropsWithLayout = AppProps & {
  Component: TNextPageWithLayout
}
const App = ({ Component, pageProps }: TAppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page) // Use the layout defined at the page level, if available
  return getLayout(
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      <Component {...pageProps} />
    </I18nextProvider>
  )
}

export default App
