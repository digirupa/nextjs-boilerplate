import { cn } from '@/lib/utils'
import { MobileSidebar } from './sidebar/mobile-sidebar'
import { UserNav } from './nav/user-nav'
import { useSidebar } from '@/lib/hooks/use-sidebar'
import NotificationNav from '@/components/app/layouts/nav/notification-nav'

export default function AppHeader() {
  const { isMinimized } = useSidebar()
  return (
    <div
      className={cn(
        'supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-secondary backdrop-blur',
        !isMinimized ? 'duration-500 md:left-[239px]' : 'duration-500 md:left-[67px]'
      )}
    >
      <nav className='flex h-14 items-center justify-between px-4'>
        <div className='flex items-center gap-2 md:ml-1'>
          <MobileSidebar />
          <p className='text-xl font-bold md:text-2xl '>Judul Halaman</p>
        </div>
        <div className='flex items-center gap-2'>
          <NotificationNav/>
          <UserNav />
        </div>
      </nav>
    </div>
  )
}
