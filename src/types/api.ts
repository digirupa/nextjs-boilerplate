// START OF BASE API TYPES
export interface IApi<T = void> {
  message: string
  status: number
  data?: T
}
export interface IApiError {
  status: number
  error: string
  title?: number
  message: string
}
// END OF BASE API TYPES

// START OF AUTHENTICATION
export type TAccount = {
  full_name: string
  avatar: string
  email: string
  username: string
  id: string
}

export interface IAuth {
  token: string
  account: TAccount
  permissions: string[]
}
// END OF AUTHENTICATION

//START OF LOGIN
export type TBodyLogin = {
  email: string
  password: string
}
//END OF LOGIN
