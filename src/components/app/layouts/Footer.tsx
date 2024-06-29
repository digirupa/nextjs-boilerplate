import { format } from 'date-fns'
import ChangeLanguage from '@/components/app/inputs/ChangeLanguage'
import ChangeTheme from '../inputs/ChangeTheme'

const Footer = () => {
  return (
    <footer className='bg-background border-t text-center'>
      <div className='p-2'>
        <div className='flex flex-wrap items-center gap-1'>
          <div className='flex gap-1 md:justify-center max-[392px]:mx-auto'>
            <ChangeTheme />
            <ChangeLanguage />
          </div>
          <p className='text-muted-foreground ml-auto max-[392px]:mr-auto' suppressHydrationWarning>
            Made in 🇮🇩 by <a href='https://github.com/digirupa'> Digirupa</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
