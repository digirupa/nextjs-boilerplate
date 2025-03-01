import React, { ReactNode } from 'react'
import { Toaster } from '@/components/ui/toaster'
import TopLoading from '@/components/app/layouts/top-loading'
import HeadApplication from '@/components/app/layouts/head-application'
import AppFooter from '@/components/app/layouts/app-footer'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/themeProvider'
import useStore from '@/store/store'
import { useRouteLoading } from '@/lib/hooks/use-route-loading'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

type TProps = {
  children: ReactNode
  title?: string
}

const DefaultLayout = ({ children, title }: TProps) => {
  const { loading } = useStore() //loading from store, ex: action
  const routeLoading = useRouteLoading() // route loading
  return (
    <React.Fragment>
      <HeadApplication title={title} />
      <main
        className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          storageKey='theme'
          enableSystem
          disableTransitionOnChange
        >
          <div className={loading || routeLoading ? 'pointer-events-none' : ''}>
            <TopLoading />
            {children}
            <AppFooter hiddenProjectName />
            <Toaster />
          </div>
        </ThemeProvider>
      </main>
    </React.Fragment>
  )
}

export default DefaultLayout
