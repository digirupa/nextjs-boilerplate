import { deleteCookie } from 'cookies-next'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'

const useRemoveUserData = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const removeUserData = () => {
    deleteCookie('token')
    deleteCookie('refreshToken')
    queryClient.resetQueries()
    router.replace('/login')
  }
  return removeUserData
}

export default useRemoveUserData
