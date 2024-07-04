'use client'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { ScrollArea } from '@/components/ui/scroll-area'
import i18n from '@/lib/i18n'
import { Bell } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { ScrollAreaViewport } from '@radix-ui/react-scroll-area'

export default function NotificationNav() {
  const notif = Array.from({ length: 100 }).map((_, i, a) => `Content All ${a.length - i}`)
  const notifUnread = Array.from({ length: 4 }).map((_, i, a) => `Content Unread ${a.length - i}`)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='h-11 w-11 rounded-sm border p-1.5'>
          <Bell size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-96' align='end' forceMount>
        <DropdownMenuGroup className='flex items-center justify-between'>
          <DropdownMenuLabel className='text-md font-bold'>{i18n.t('notification')}</DropdownMenuLabel>
          <Button variant='ghost' className='underline'>
            {i18n.t('read_all')}
          </Button>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Tabs defaultValue='unread' className='w-full'>
            <TabsList className='mx-2 mt-3 grid grid-cols-2'>
              <TabsTrigger value='unread'>{i18n.t('unread')}</TabsTrigger>
              <TabsTrigger value='all'>{i18n.t('all')}</TabsTrigger>
            </TabsList>
            <TabsContent value='unread'>
              <ScrollArea className='mx-3 my-4 w-full'>
                <ScrollAreaViewport className='max-h-72'>
                  {notifUnread.map(obj => (
                    <>
                      <div key={obj} className='text-sm'>
                        {obj}
                      </div>
                      <Separator className='my-2' />
                    </>
                  ))}
                </ScrollAreaViewport>
              </ScrollArea>
            </TabsContent>
            <TabsContent value='all'>
              <ScrollArea className='mx-3 my-4 w-full'>
                <ScrollAreaViewport className='max-h-72'>
                  {notif.map(obj => (
                    <>
                      <div key={obj} className='text-sm'>
                        {obj}
                      </div>
                      <Separator className='my-2' />
                    </>
                  ))}
                </ScrollAreaViewport>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
