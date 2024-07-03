'use client'
import { useState } from 'react'
import { navItems } from '@/constants/menus'
import { cn } from '@/lib/utils'
import { ChevronLeft, Link } from 'lucide-react'
import { useSidebar } from '@/lib/hooks/use-sidebar'
import { DashboardNav } from '../nav/dashboard-nav'

type SidebarProps = {
  className?: string
}

export default function Sidebar({ className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar()
  const [status, setStatus] = useState(false)

  const handleToggle = () => {
    setStatus(true)
    toggle()
    setTimeout(() => setStatus(false), 500)
  }
  return (
    <nav
      className={cn(
        `relative z-[21] hidden h-screen flex-none border-r pt-0 md:block`,
        status && 'duration-500',
        !isMinimized ? 'w-[239px]' : 'w-[67px]',
        className
      )}
    >
      <ChevronLeft
        className={cn(
          'absolute -right-3 top-4 z-[22] cursor-pointer rounded border bg-background text-3xl text-foreground',
          isMinimized && 'rotate-180'
        )}
        onClick={handleToggle}
      />
      <div className='h-screen overflow-y-scroll px-3 py-3'>
        <Link href={'#'} target='_blank' className='mx-auto mb-6 h-[2rem]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-6 w-6'
          >
            <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
          </svg>
        </Link>
        <DashboardNav items={navItems} />
      </div>
    </nav>
  )
}
