import React, { ReactNode } from 'react'
import { Toaster } from '@/components/ui/toaster'
import Loading from '@/components/app/layouts/Loading'
import HeadApplication from '@/components/app/layouts/HeadApplication'
import Footer from '@/components/app/layouts/Footer'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/themeProvider'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

type TProps = {
  children: ReactNode
  title?: string
}

const DashboardLayout = ({ children, title }: TProps) => {
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
          <Loading />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </main>
    </React.Fragment>
  )
}

export default DashboardLayout
