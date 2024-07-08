import { Icons } from '@/components/app/icons'

export interface NavItem {
  id: string
  label: string
  type: 'category' | 'page' | 'group'
  link: string
  icon?: keyof typeof Icons
  children?: NavItem[]
  disabled?: boolean
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export interface FooterItem {
  title: string
  items: {
    title: string
    href: string
    external?: boolean
  }[]
}

export type MainNavItem = NavItemWithOptionalChildren

export type SidebarNavItem = NavItemWithChildren

export type TNotification = {
  createdAt: Date
  title: string
  content: string
  isRead: boolean
  id: string
}
