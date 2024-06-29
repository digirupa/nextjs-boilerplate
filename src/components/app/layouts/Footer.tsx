import { format } from 'date-fns'
import ChangeLanguage from '@/components/app/inputs/ChangeLanguage'
import ChangeTheme from '../inputs/ChangeTheme'

const Footer = () => {
  const thisYear = format(new Date(), 'yyyy')
  return (
    <footer className='bg-background border-t text-center'>
      <div className='p-2'>
        <div className='flex flex-wrap items-center gap-1'>
          <div className='flex gap-1 md:justify-center max-[400px]:mx-auto'>
            <ChangeTheme />
            <ChangeLanguage />
          </div>
          <p className='text-muted-foreground ml-auto max-[400px]:mr-auto' suppressHydrationWarning>
            ©{thisYear} <a href='https://github.com/digirupa'> Digirupa Studio</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
