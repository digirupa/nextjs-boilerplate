import useAxiosAuth from '@/lib/hooks/useAxiosAuth'
import { AxiosError, AxiosResponse } from 'axios'
import { IApi, IApiError, IAuth, TBodyLogin } from '@/types/api'
import useStore from '@/store/store'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import useRemoveUserData from '@/lib/hooks/useRemoveUserData'
import { useToast } from '@/components/ui/use-toast'
import i18n from '@/lib/i18n'

const baseAPI = '/v1'

/**
 *  Login
 */
export const useLogin = () => {
  const axiosAuth = useAxiosAuth()
  const { toast } = useToast()
  const { setPermissions, setAccount } = useStore()
  const router = useRouter()

  const login = async (body: TBodyLogin) => {
    try {
      const res: AxiosResponse<IApi<IAuth>> = await axiosAuth.post(`${baseAPI}/login`, {
        ...body
      })
      if (res && res?.data.status === 200 && res.data.data) {
        setCookie('token', JSON.stringify(res.data.data?.token))

        setPermissions(res.data.data?.permissions)
        setAccount(res.data.data?.account)

        router.replace('/')
        return true
      } else return false
    } catch (err) {
      const error = err as AxiosError<IApiError>
      toast({
        title: (error?.response?.data?.title ?? i18n.t('unexpected_error_title')) as string,
        description: error?.response?.data?.message ?? i18n.t('unexpected_error_description')
      })
      return false
    }
  }
  return login
}

/**
 *  Logout
 */
export const useLogout = () => {
  const axiosAuth = useAxiosAuth()
  const { setPermissions } = useStore()
  const { toast } = useToast()
  const removeUserData = useRemoveUserData()

  const logout = async () => {
    try {
      const res: AxiosResponse<IApi> = await axiosAuth.post(`${baseAPI}/logout`)

      if (res && res.data.status == 200) {
        removeUserData()
        setPermissions([])
      }
    } catch (err) {
      const error = err as AxiosError<IApiError>
      toast({
        title: (error?.response?.data?.title ?? i18n.t('unexpected_error_title')) as string,
        description: error?.response?.data?.message ?? i18n.t('unexpected_error_description')
      })
      return false
    }
  }

  return { logout }
}
