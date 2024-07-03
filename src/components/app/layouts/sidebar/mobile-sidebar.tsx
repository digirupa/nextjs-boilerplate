'use client'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { navItems } from '@/constants/menus'
import { MenuIcon } from 'lucide-react'
import React, { useState } from 'react'
import { DashboardNav } from '../nav/dashboard-nav'
import { Button } from '@/components/ui/button'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function MobileSidebar({}: SidebarProps) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className='md:!hidden'>
          <Button variant='outline' className='h-11 w-11 rounded-sm border p-1.5'>
            <MenuIcon size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='!px-0'>
          <div className='space-y-4 py-4'>
            <div className='px-3 py-2'>
              <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>Overview</h2>
              <div className='space-y-1'>
                <DashboardNav items={navItems} isMobileNav={true} setOpen={setOpen} />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
