import i18n from '@/lib/i18n'
import { NavItem } from '@/types'

export const navItems: NavItem[] = [
  {
    id: 'dashboard',
    label: i18n.t('menu.dashboard'),
    type: 'page',
    link: '/',
    icon: 'dashboard'
  },
  {
    id: 'role_permissions',
    label: i18n.t('menu.role_permissions'),
    type: 'page',
    link: '/role-permissions',
    icon: 'folderKey'
  },
  {
    id: 'user_management',
    label: i18n.t('menu.user_management'),
    type: 'page',
    link: '/user-management',
    icon: 'userRound'
  },
  {
    id: 'master_data',
    label: i18n.t('menu.master_data'),
    type: 'category',
    link: '#'
  },
  {
    id: 'product',
    label: i18n.t('menu.product'),
    type: 'page',
    link: '/master-data/product',
    icon: 'packageOpen'
  },
  {
    id: 'product_category',
    label: i18n.t('menu.product_category'),
    type: 'page',
    link: '/master-data/product-category',
    icon: 'archive'
  },
  {
    id: 'transactions',
    label: i18n.t('menu.transactions'),
    type: 'category',
    link: '#'
  },
  {
    id: 'goods_request',
    label: i18n.t('menu.goods_request'),
    type: 'page',
    link: '/transaction/goods-request',
    icon: 'baggageClaim'
  },
  {
    id: 'purchase_order',
    label: i18n.t('menu.purchase_order'),
    type: 'page',
    link: '/transaction/purchase-order',
    icon: 'shoppingBasket'
  },
  {
    id: 'sales_order',
    label: i18n.t('menu.sales_order'),
    type: 'page',
    link: '/transaction/sales-order',
    icon: 'shoppingCart'
  },
  {
    id: 'reports',
    label: i18n.t('menu.reports'),
    type: 'category',
    link: '#'
  },
  {
    id: 'warehouse',
    label: i18n.t('menu.warehouse'),
    type: 'page',
    link: '#',
    icon: 'warehouse',
    children: [
      {
        id: 'warehouse_report_1',
        label: 'Report #1',
        type: 'page',
        link: '#'
      }
    ]
  },
  {
    id: 'procurement',
    label: i18n.t('menu.procurement'),
    type: 'page',
    link: '#',
    icon: 'ticketPlus',
    children: [
      {
        id: 'procurement_report_1',
        label: 'Report #1',
        type: 'page',
        link: '#'
      },
      {
        id: 'procurement_report_2',
        label: 'Report #2',
        type: 'page',
        link: '#'
      }
    ]
  },
  {
    id: 'sales',
    label: i18n.t('menu.sales'),
    type: 'page',
    link: '#',
    icon: 'ticketCheck',
    children: [
      {
        id: 'sales_report_1',
        label: 'Report #1',
        type: 'page',
        link: '#'
      },
      {
        id: 'sales_report_2',
        label: 'Report #2',
        type: 'page',
        link: '#'
      },
      {
        id: 'sales_report_3',
        label: 'Report #3',
        type: 'page',
        link: '#'
      }
    ]
  },
  {
    id: 'finance_accounting',
    label: i18n.t('menu.finance_accounting'),
    type: 'page',
    link: '#',
    icon: 'wallet',
    children: [
      {
        id: 'finance_accounting_report_1',
        label: 'Report #1',
        type: 'page',
        link: '#'
      },
      {
        id: 'finance_accounting_report_2',
        label: 'Report #2',
        type: 'page',
        link: '#'
      },
      {
        id: 'finance_accounting_report_3',
        label: 'Report #3',
        type: 'page',
        link: '#'
      },
      {
        id: 'finance_accounting_report_4',
        label: 'Report #4',
        type: 'page',
        link: '#'
      }
    ]
  }
]
