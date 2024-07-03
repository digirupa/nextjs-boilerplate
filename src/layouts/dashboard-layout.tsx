import React, { ReactNode } from 'react'
import { Toaster } from '@/components/ui/toaster'
import TopLoading from '@/components/app/layouts/top-loading'
import HeadApplication from '@/components/app/layouts/head-application'
import AppFooter from '@/components/app/layouts/app-footer'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/themeProvider'
import AppHeader from '@/components/app/layouts/app-header'
import Sidebar from '@/components/app/layouts/sidebar/sidebar'
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

const DashboardLayout = ({ children, title }: TProps) => {
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
            <div className='flex h-screen'>
              <AppHeader title={title ?? ''} />
              <Sidebar />
              <main className='mt-[56px] flex-1 overflow-x-hidden overflow-y-scroll bg-secondary'>
                {children}
                <AppFooter hiddenThemeChange hiddenLanguageChange />
              </main>
            </div>
            <Toaster />
          </div>
        </ThemeProvider>
      </main>
    </React.Fragment>
  )
}

export default DashboardLayout
