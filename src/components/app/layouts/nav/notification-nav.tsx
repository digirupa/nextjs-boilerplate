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
import { ScrollAreaViewport } from '@radix-ui/react-scroll-area'
import DummyNotif from '@/dummy/notifications.json'
import { useMemo, useState } from 'react'
import { compareDesc, format, parseISO } from 'date-fns'
import { cn } from '@/lib/utils'

export default function NotificationNav() {
  const [DataNotif] = useState(DummyNotif.sort((a, b) => compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))))

  const NotifUnread = useMemo(() => DataNotif.filter(obj => obj.isRead === false), [DataNotif])

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
                  {NotifUnread.map((obj, index: number) => (
                    <div
                      key={index}
                      className={cn(
                        'mr-4 flex cursor-pointer flex-row justify-between overflow-x-visible py-2 hover:bg-secondary',
                        index + 1 !== NotifUnread.length && 'border-b'
                      )}
                    >
                      <div className='flex grow flex-col gap-1'>
                        <p className='text-sm font-bold'>{obj.title}</p>
                        <p className='text-xs font-normal'>{obj.content}</p>
                      </div>
                      <div className='flex flex-col items-end'>
                        <p className='text-xs text-muted-foreground'>{format(obj.createdAt, 'dd/MM/yyyy')}</p>
                        <p className='text-xs text-muted-foreground'>{format(obj.createdAt, 'HH:mm')}</p>
                      </div>
                    </div>
                  ))}
                </ScrollAreaViewport>
              </ScrollArea>
            </TabsContent>
            <TabsContent value='all'>
              <ScrollArea className='mx-3 my-4 w-full'>
                <ScrollAreaViewport className='max-h-72'>
                  {DataNotif.map((obj, index: number) => (
                    <div
                      key={index}
                      className={cn(
                        'mr-4 flex cursor-pointer flex-row justify-between overflow-x-visible py-2 hover:bg-secondary',
                        index + 1 !== NotifUnread.length && 'border-b',
                        obj.isRead === false &&
                          'bg-green-50 hover:bg-green-100 dark:bg-green-950 dark:hover:bg-green-900'
                      )}
                    >
                      <div className='flex grow flex-col gap-1'>
                        <p className='text-sm font-bold'>{obj.title}</p>
                        <p className='text-xs font-normal'>{obj.content}</p>
                      </div>
                      <div className='flex flex-col items-end'>
                        <p className='text-xs text-muted-foreground'>{format(obj.createdAt, 'dd/MM/yyyy')}</p>
                        <p className='text-xs text-muted-foreground'>{format(obj.createdAt, 'HH:mm')}</p>
                      </div>
                    </div>
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
