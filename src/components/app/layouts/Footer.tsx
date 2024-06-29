import { format } from 'date-fns'
import ChangeLanguage from '@/components/app/inputs/ChangeLanguage'

const Footer = () => {
  const thisYear = format(new Date(), 'yyyy')
  return (
    <footer className='bg-background border-t text-center'>
      <div className='p-2'>
        <div className='flex flex-wrap justify-between items-center'>
          <div>
            <ChangeLanguage />
          </div>
          <p className='text-muted-foreground' suppressHydrationWarning>
            ©{thisYear} <a href='https://github.com/digirupa'> Digirupa Studio</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
