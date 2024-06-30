import { useController, UseControllerProps } from 'react-hook-form'
import { IOptions } from '@/types/form'
import React from 'react'
import { Input } from '@/components/ui/input'
import { PasswordInput } from './PasswordInput'
import { cn } from '@/lib/utils'

interface IProps extends UseControllerProps<any, string> {
  placeholder?: string
  id: string
  type: string
  required?: boolean
  select?: {
    isMulti?: boolean
  }
  options?: IOptions[]
  className?: string
}

const FormInput = ({ placeholder = '', required = false, id, type, className, ...props }: IProps) => {
  const { field } = useController({ ...props })
  return (
    <React.Fragment>
      {type === 'password' ? (
        <PasswordInput className={className} id={id} placeholder={placeholder} required={required} {...field} />
      ) : (
        <Input className={cn(className)} id={id} type={type} placeholder={placeholder} required={required} {...field} />
      )}
    </React.Fragment>
  )
}
export default FormInput
