import useAxiosAuth from '@/lib/hooks/use-axios-auth'
import { AxiosError, AxiosResponse } from 'axios'
import { IApi, IApiError, TAccount, TBodyLogin } from '@/types/api'
import useStore from '@/store/store'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import useRemoveUserData from '@/lib/hooks/use-remove-user-data'
import { useToast } from '@/components/ui/use-toast'
import i18n from '@/lib/i18n'
import DummyPermissions from '@/dummy/permissions.json'

const baseAPI = '/v1'

// START OF LOGIN
export const useLogin = () => {
  const axiosAuth = useAxiosAuth()
  const { toast } = useToast()
  const { setPermissions, setAccount } = useStore()
  const router = useRouter()

  const login = async (body: TBodyLogin) => {
    try {
      const res: AxiosResponse<TAccount> = await axiosAuth.post(`${baseAPI}/login`, {
        ...body
      })
      if (res?.status === 200 || res?.status === 201) {
        setCookie('app-token', '907a8450031c96e5')

        setPermissions(DummyPermissions)
        setAccount(res?.data)

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
// END OF LOGIN

// START OF LOGOUT
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
//END OF LOGOUT
