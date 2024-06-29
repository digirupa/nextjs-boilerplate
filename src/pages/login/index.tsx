import DefaultLayout from '@/layouts/DefaultLayout'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ReactElement, useMemo } from 'react'
import i18n from '@/lib/i18n'

export default function Login() {
  const router = useRouter()
  return (
    <div className='w-full min-[400px]:min-h-[calc(100vh_-_56px)] max-[400px]:min-h-[calc(100vh_-_84px)] lg:grid lg:grid-cols-2'>
      <div className='flex items-center justify-center py-12'>
        <div className='mx-auto grid w-[350px] gap-6'>
          <div className='grid gap-2'>
            <h1 className='text-3xl font-bold' suppressHydrationWarning>
              {i18n.t('login_title')}
            </h1>
            <p className='text-muted-foreground' suppressHydrationWarning>
              {i18n.t('login_subtitle')}
            </p>
          </div>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' placeholder='m@example.com' required />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
                <Link href='/forgot-password' className='ml-auto inline-block text-sm underline'>
                  Forgot your password?
                </Link>
              </div>
              <Input id='password' type='password' required />
            </div>
            <Button type='submit' className='w-full' onClick={() => router.push('/')}>
              Login
            </Button>
          </div>
          <div className='mt-1 text-sm'>
            Don&apos;t have an account?{' '}
            <Link href='#' className='underline'>
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className='hidden bg-muted lg:block'>
        <Image
          src='/assets/images/placeholder.svg'
          alt='Image'
          width='1920'
          height='1080'
          className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
        />
      </div>
    </div>
  )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout title={i18n.t('login_title')}>{page}</DefaultLayout>
}
