'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { getInitials } from '@/lib/utils'
import useStore from '@/store/store'
export function UserNav() {
  const { account } = useStore()
  console.log('account: ', account)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='h-11 gap-2 rounded-sm border p-1.5'>
          <Avatar className='h-8 w-8'>
            <AvatarImage src={account?.avatar} alt={'avatar'} />
            <AvatarFallback>{getInitials(account.full_name)}</AvatarFallback>
          </Avatar>
          <div className='text-left max-md:hidden'>
            <p className='font-bold'>{account?.full_name}</p>
            <p className='text-xs text-muted-foreground'>{account.email}</p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal md:hidden'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>{account?.full_name}</p>
            <p className='text-xs leading-none text-muted-foreground'>{account.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className='md:hidden' />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>New Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => {}}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
