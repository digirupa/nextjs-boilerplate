import ChangeLanguage from '@/components/app/inputs/change-language'
import ChangeTheme from '../inputs/change-theme'

const Footer = () => {
  return (
    <footer className='border-t text-center'>
      <div className='p-2'>
        <div className='flex flex-wrap items-center gap-1'>
          <div className='flex gap-1'>
            <ChangeTheme />
            <ChangeLanguage />
          </div>
          <p className='ml-auto mr-1 text-muted-foreground' suppressHydrationWarning>
            Made in 🇮🇩 by <a href='https://github.com/digirupa'> Digirupa</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
