import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { StorageValue } from 'zustand/middleware'
import { TStore } from './types/store'

export function middleware(request: NextRequest) {
  const cookieStore = cookies()
  const token = cookieStore.get('app-token')
  const store: StorageValue<Pick<TStore, 'permissions' | 'account'>> = cookieStore.get('store')
    ? JSON.parse(String(cookieStore.get('store')?.value))
    : null

  /**
   *  Check if auth path
   */
  if (
    request.nextUrl.pathname.startsWith('/login') ||
    request.nextUrl.pathname.startsWith('/register') ||
    request.nextUrl.pathname.startsWith('/forget-password') ||
    request.nextUrl.pathname.startsWith('/new-password')
  ) {
    /**
     *  User not login but token and refresh token available
     */
    if (token && store) {
      return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()

    /**
     *  Check if not auth path
     */
  } else {
    if (!token || !store) {
      return NextResponse.redirect(new URL('/login', request.url))
    } else if (
      store &&
      store.state.permissions?.length == 0 &&
      request.nextUrl.pathname !== '/waiting' &&
      request.nextUrl.pathname !== '/setting'
    ) {
      /**
       *  if login but dont have permission
       */
      return NextResponse.redirect(new URL('/waiting', request.url))
    } else if (store && store.state.permissions?.length > 0) {
      /**
       *  if login and have permission
       */
      switch (true) {
        case request.nextUrl.pathname === '/waiting':
          return NextResponse.redirect(new URL('/profile', request.url))

        case request.nextUrl.pathname === '/' && !store.state.permissions.includes('HOME'):
          return NextResponse.redirect(new URL('/profile', request.url))

        // case request.nextUrl.pathname.includes('loyalty-member') &&
        //   !store.state.permissions.includes('LOYALTY_MEMBER_LIST'):
        //   return NextResponse.redirect(new URL('/profile', request.url))

        // case request.nextUrl.pathname.includes('/user/customer') && !store.state.permissions.includes('CUSTOMER_LIST'):
        //   return NextResponse.redirect(new URL('/profile', request.url))

        // case request.nextUrl.pathname.includes('/user/employee') && !store.state.permissions.includes('EMPLOYEE_LIST'):
        //   return NextResponse.redirect(new URL('/profile', request.url))

        // case request.nextUrl.pathname.includes('/user/role-permission') &&
        //   !store.state.permissions.includes('ROLE_LIST') &&
        //   !store.state.permissions.includes('PERMISSION_LIST'):
        //   return NextResponse.redirect(new URL('/profile', request.url))
      }
    }
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - assets
     */
    {
      source: '/((?!api|_next/static|_next/image|assets|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' }
      ]
    },

    {
      source: '/((?!api|_next/static|_next/image|assets|favicon.ico).*)',
      has: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' }
      ]
    },

    {
      source: '/((?!api|_next/static|_next/image|assets|favicon.ico).*)',
      has: [{ type: 'header', key: 'x-present' }],
      missing: [{ type: 'header', key: 'x-missing', value: 'prefetch' }]
    }
  ]
}
