export interface IDynamicForm {
  name: string
  label: string
  type: string
  fieldType?: 'text' | 'select' | 'email' | 'password'
  placeholder: string
  options?: IOptions[]
  validation?: IValidation
  disabled?: boolean
  readOnly?: boolean
  defaultImageUrl?: string
  select?: {
    isMulti?: boolean
  }
  customMessage?: {
    email?: string
    required?: string
    charLength?: {
      min?: string
      max?: string
    }
    sameAs?: string
    regex?: string
  }
  hideError?: boolean
}

interface IValidation {
  charLength?: {
    max?: number
    min?: number
  }
  date?: {
    min?: Date
    max?: Date
  }
  inputRule?: RegExp[]
  numeric?: boolean
  required?: boolean
  image?: IImageValidation
  sameAs?: string
  regex?: RegExp
}

interface IImageValidation {
  maxSize?: number
}

export interface IOptions {
  value: string | number
  label: string
}

export type TLoginForm = {
  email: string
  password: string
}
