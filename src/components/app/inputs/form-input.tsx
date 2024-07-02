import { useController, UseControllerProps } from 'react-hook-form'
import { IOptions } from '@/types/form'
import React, { forwardRef, useEffect, useState } from 'react'
import { Input, InputProps } from '@/components/ui/input'
import { PasswordInput } from './password-input'
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

const FormInput = forwardRef<HTMLInputElement | InputProps, IProps>(
  ({ placeholder = '', required = false, id, type, className, ...props }, ref) => {
    ref
    const { field } = useController({ ...props })
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
      setIsClient(true)
    }, [])

    return (
      <React.Fragment>
        {isClient && (
          <React.Fragment>
            {type === 'password' ? (
              <PasswordInput className={className} id={id} placeholder={placeholder} required={required} {...field} />
            ) : (
              <Input
                className={cn(className)}
                id={id}
                type={type}
                placeholder={placeholder}
                required={required}
                {...field}
              />
            )}
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
)
FormInput.displayName = 'FormInput'
export { FormInput }
