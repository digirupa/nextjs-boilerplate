import React, { ReactNode } from 'react'
import { Toaster } from '@/components/ui/toaster'
import TopLoading from '@/components/app/layouts/top-loading'
import HeadApplication from '@/components/app/layouts/head-application'
import Footer from '@/components/app/layouts/footer'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/themeProvider'
import Header from '@/components/app/layouts/header'
import Sidebar from '@/components/app/layouts/sidebar'
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
              <Header />
              <Sidebar />
              <main className='flex-1 overflow-x-hidden overflow-y-scroll bg-secondary pt-16'>
                {children}
                <Footer />
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
