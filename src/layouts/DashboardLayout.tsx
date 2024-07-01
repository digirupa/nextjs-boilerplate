import React, { ReactNode } from 'react'
import { Toaster } from '@/components/ui/toaster'
import Loading from '@/components/app/layouts/Loading'
import HeadApplication from '@/components/app/layouts/HeadApplication'
import Footer from '@/components/app/layouts/Footer'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/themeProvider'
import Header from '@/components/app/layouts/Header'
import Sidebar from '@/components/app/layouts/sidebar'
import useStore from '@/store/store'
import { useRouteLoading } from '@/lib/hooks/useRouteLoading'

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
            <Loading />
            <Header />
            <div className='flex h-screen overflow-hidden'>
              <Sidebar />
              <main className='flex-1 overflow-hidden pt-16'>{children}</main>
            </div>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </main>
    </React.Fragment>
  )
}

export default DashboardLayout
