'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NavItem } from '@/types'
import { Dispatch, SetStateAction } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Icons } from '../../icons'
import { useSidebar } from '@/lib/hooks/use-sidebar'
import { Separator } from '@/components/ui/separator'

interface DashboardNavProps {
  items: NavItem[]
  setOpen?: Dispatch<SetStateAction<boolean>>
  isMobileNav?: boolean
}

export function DashboardNav({ items, setOpen, isMobileNav = false }: DashboardNavProps) {
  const path = usePathname()
  const { isMinimized } = useSidebar()

  if (!items?.length) {
    return null
  }

  return (
    <nav className='grid items-start gap-2'>
      <TooltipProvider delayDuration={100}>
        {items.map((item, index) => {
          const Icon = Icons[item.icon || 'arrowRight']
          return (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                {item.type === 'page' ? (
                  <Link
                    href={item.disabled ? '#' : item.link}
                    className={cn(
                      'flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                      path === item.link ? 'border-2 bg-accent' : 'transparent',
                      item.disabled && 'cursor-not-allowed opacity-80'
                    )}
                    onClick={() => {
                      if (setOpen) setOpen(false)
                    }}
                  >
                    <Icon className={`ml-2.5 size-5`} />

                    {isMobileNav ||
                      (!isMinimized && !isMobileNav && <span className='mr-2 truncate'>{item.label}</span>)}
                  </Link>
                ) : (
                  <div className={isMobileNav || (!isMinimized && !isMobileNav) ? '' : 'cursor-pointer'}>
                    {isMobileNav || (!isMinimized && !isMobileNav) ? (
                      <p className='pb-0 pt-2 font-bold'>{item.label}</p>
                    ) : (
                      <Separator className='mb-0 mt-2 hover:rounded-full hover:border-t-4' />
                    )}
                  </div>
                )}
              </TooltipTrigger>
              <TooltipContent
                align='center'
                side='right'
                sideOffset={8}
                className={!isMinimized ? 'hidden' : 'inline-block'}
              >
                {item.label}
              </TooltipContent>
            </Tooltip>
          )
        })}
      </TooltipProvider>
    </nav>
  )
}
