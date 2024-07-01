import { useEffect } from 'react'
import { apiAuth } from '@/lib/api'
import useStore from '@/store/store'
import { getCookie } from 'cookies-next'
import useRemoveUserData from '@/lib/hooks/useRemoveUserData'
import { useToast } from '@/components/ui/use-toast'
import i18n from '@/lib/i18n'

const useAxiosAuth = () => {
  const { setLoading } = useStore()
  const { toast } = useToast()
  const removeUserData = useRemoveUserData()

  useEffect(() => {
    const token = getCookie('token') ? JSON.parse(getCookie('token') as string) : ''

    const requestIntercept = apiAuth.interceptors.request.use(
      config => {
        setLoading(true)
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${token}`
        }

        return config
      },
      error => Promise.reject(error)
    )

    const responseIntercept = apiAuth.interceptors.response.use(
      response => {
        setLoading(false)
        return response
      },
      async error => {
        if (error?.response?.status === 401) {
          removeUserData()
        } else {
          toast({
            title: i18n.t('unexpected_error_title'),
            description: i18n.t('unexpected_error_description')
          })
        }
        setLoading(false)
        return await Promise.reject(error)
      }
    )

    return () => {
      apiAuth.interceptors.request.eject(requestIntercept)
      apiAuth.interceptors.response.eject(responseIntercept)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return apiAuth
}

export default useAxiosAuth
