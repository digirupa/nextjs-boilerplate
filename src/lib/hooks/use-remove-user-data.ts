import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/router'

const useRemoveUserData = () => {
  const router = useRouter()
  const removeUserData = () => {
    deleteCookie('app-token')
    router.replace('/login')
  }
  return removeUserData
}

export default useRemoveUserData
