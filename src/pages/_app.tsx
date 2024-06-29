import '@/styles/globals.css'
import '@/styles/styles.css'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

export type TNextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type TAppPropsWithLayout = AppProps & {
  Component: TNextPageWithLayout
}
export default function App({ Component, pageProps }: TAppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page) // Use the layout defined at the page level, if available
  return getLayout(<Component {...pageProps} />)
}
