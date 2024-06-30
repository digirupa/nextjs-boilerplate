import { create } from 'zustand'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { StorageValue, persist } from 'zustand/middleware'
import { TStore } from '@/types/store'

const useStore = create<TStore>()(
  persist(
    set => ({
      // loading
      loading: false,
      setLoading: loading => set(state => ({ ...state, loading })),
      // permissions
      permissions: [],
      setPermissions: permissions => set(state => ({ ...state, permissions })),
      // account
      account: {
        full_name: '',
        avatar: '',
        email: '',
        username: '',
        id: ''
      },
      setAccount: account => set(state => ({ ...state, account }))
    }),
    {
      name: 'store',
      storage: {
        // Get persist storage
        getItem(name: string): StorageValue<unknown> {
          return JSON.parse(getCookie(name) || '') // get from storage however you want
        },
        // Set persist storage
        async setItem(name: string, storageValue: StorageValue<unknown>): Promise<void> {
          setCookie(name, JSON.stringify(storageValue))
        },
        //  Remove persist storage
        async removeItem(name: string): Promise<void> {
          deleteCookie(name)
        }
      }
    }
  )
)

export default useStore
