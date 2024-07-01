import DefaultLayout from '@/layouts/DefaultLayout'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { ReactElement } from 'react'
import i18n from '@/lib/i18n'
import { ZodType } from 'zod'
import { IDynamicForm, TLoginForm } from '@/types/form'
import { generateValidationSchema } from '@/lib/generateValidationSchema'
import LoginForm from '@/form/login'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useLogin } from '@/queries/auth'
import { FormInput } from '@/components/app/inputs/FormInput'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()
  //START OF FORM
  const UserSchema: ZodType<any> = generateValidationSchema(LoginForm)
  const defaultValues: TLoginForm = {
    email: '',
    password: ''
  }
  const form = useForm<TLoginForm>({
    resolver: zodResolver(UserSchema), // Apply the zodResolver
    mode: 'all',
    defaultValues
  })
  const login = useLogin()

  const onSubmit = async (data: TLoginForm) => {
    await login(data)
  }
  //END OF FORM

  return (
    <div className='min-h-[calc(100vh_-_56px)] w-full lg:grid lg:grid-cols-2'>
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
          <Form {...form}>
            <form className='grid gap-4' onSubmit={form.handleSubmit(onSubmit)}>
              {LoginForm.map((item: IDynamicForm, index: number) => {
                return (
                  <div className='grid gap-2' key={index}>
                    <FormField
                      control={form.control}
                      name={item.name === 'password' ? (item.name as 'password') : (item.name as 'email')}
                      render={({ field }) => (
                        <FormItem>
                          {item.name === 'password' ? (
                            <div className='flex items-center'>
                              <Label suppressHydrationWarning>{item.label}</Label>
                              <Link
                                href={'#'}
                                onClick={() => router.push('/forget-password')}
                                className='ml-auto inline-block text-sm underline'
                                suppressHydrationWarning
                              >
                                {i18n.t('forget_your_password')}
                              </Link>
                            </div>
                          ) : (
                            <Label suppressHydrationWarning>{item.label}</Label>
                          )}

                          <FormControl>
                            <FormInput
                              id={item.name}
                              type={item.type}
                              placeholder={item.placeholder}
                              required={item.validation?.required}
                              control={form.control}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage suppressHydrationWarning />
                        </FormItem>
                      )}
                    />
                  </div>
                )
              })}

              <Button type='submit' className='w-full' suppressHydrationWarning>
                {i18n.t('login')}
              </Button>
            </form>
          </Form>
          <div className='mt-1 text-sm' suppressHydrationWarning>
            {i18n.t('dont_have_an_account') + '? '}
            <Link href='#' onClick={() => router.push('/register')} className='underline' suppressHydrationWarning>
              {i18n.t('sign_up')}
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
          priority
        />
      </div>
    </div>
  )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout title={i18n.t('login_title')}>{page}</DefaultLayout>
}
