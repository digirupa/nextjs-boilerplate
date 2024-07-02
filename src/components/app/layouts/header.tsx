import { cn } from '@/lib/utils'
import Link from 'next/link'
import ChangeTheme from '../inputs/change-theme'
import { MobileSidebar } from './mobile-sidebar'
import { UserNav } from './user-nav'
import { useSidebar } from '@/lib/hooks/use-sidebar'

export default function Header() {
  const { isMinimized } = useSidebar()
  return (
    <div
      className={cn(
        'supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-secondary backdrop-blur',
        !isMinimized ? 'duration-500 lg:left-[239px]' : 'duration-500 lg:left-[67px]'
      )}
    >
      <nav className='flex h-14 items-center justify-between px-4'>
        <div className='hidden lg:block'>
          <Link href={'#'} target='_blank'>
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
        </div>
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>

        <div className='flex items-center gap-2'>
          <UserNav />
          <ChangeTheme />
        </div>
      </nav>
    </div>
  )
}
