import { TAccount } from './api'

export type TStore = {
  loading: boolean
  setLoading: (loading: boolean) => void
  permissions: string[]
  setPermissions: (permissions: string[]) => void
  account: TAccount
  setAccount: (permissions: TAccount) => void
}
