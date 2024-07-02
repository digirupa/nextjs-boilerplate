import ChangeLanguage from '@/components/app/inputs/change-language'
import ChangeTheme from '../inputs/change-theme'
import project from '@/project.json'

type TProps = {
  hiddenProjectName?: boolean
  hiddenThemeChange?: boolean
  hiddenLanguageChange?: boolean
}
const AppFooter = ({ hiddenProjectName = false, hiddenThemeChange = false, hiddenLanguageChange = false }: TProps) => {
  return (
    <footer className='border-t text-center'>
      <div className='mx-4 my-2'>
        <div className='flex flex-wrap items-center gap-1'>
          <div className='flex gap-1'>
            {!hiddenProjectName && (
              <p className='flex items-center text-muted-foreground'>{project.name + ' - ' + project.version}</p>
            )}
            {!hiddenThemeChange && <ChangeTheme />}
            {!hiddenLanguageChange && <ChangeLanguage />}
          </div>
          <p className='ml-auto mr-1 text-muted-foreground' suppressHydrationWarning>
            Made in 🇮🇩 by <a href='https://github.com/digirupa'> Digirupa</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter
