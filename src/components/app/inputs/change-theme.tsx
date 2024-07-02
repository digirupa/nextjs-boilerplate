import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useEffect, useState } from 'react'

export default function ChangeTheme() {
  const { setTheme, resolvedTheme } = useTheme()
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {isClient && (
          <Button variant='outline' size='icon'>
            {resolvedTheme === 'light' ? (
              <Sun className='mx-auto h-[1.2rem] w-[1.2rem] transition-all' />
            ) : resolvedTheme === 'dark' ? (
              <Moon className='mx-auto h-[1.2rem] w-[1.2rem] transition-all' />
            ) : (
              <></>
            )}
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start'>
        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
