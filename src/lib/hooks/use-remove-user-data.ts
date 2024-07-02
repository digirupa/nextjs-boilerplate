import { deleteCookie } from 'cookies-next'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'

const useRemoveUserData = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const removeUserData = () => {
    deleteCookie('digirupa-token')
    queryClient.resetQueries()
    router.replace('/login')
  }
  return removeUserData
}

export default useRemoveUserData
