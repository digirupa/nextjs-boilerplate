import { IDynamicForm } from '@/types/form'
import { ZodNumber, ZodString, ZodType, z } from 'zod'

type Valid = Record<string, ZodNumber | ZodString>

export const generateValidationSchema = (fields: IDynamicForm[]) => {
  const validationsGroup: Valid = {}
  for (const field of fields) {
    let validations: any = z

    if (field.type === 'select' && field.select?.isMulti) validations = validations.array()
    // else if (field.type === 'select' && !field.select?.isMulti) validations = validations.number()
    else validations = validations.string()

    if (field.validation?.required) {
      if (field.type === 'select' && field.select?.isMulti) validations = validations.min(1, { message: 'required' })
      else
        validations = validations = validations.nonempty(
          field.customMessage?.required ? field.customMessage?.required : null
        )
    } else validations = validations = validations.optional()

    if (field.type === 'email' && field.validation?.required)
      validations = validations.email(field.customMessage?.email ? field.customMessage?.email : null)
    if (field.validation?.charLength) {
      if (field.validation?.charLength.min)
        validations = validations.min(
          field.validation.charLength.min,
          field.customMessage?.charLength?.min != undefined && {
            message: field.customMessage?.charLength.min
          }
        )
      if (field.validation?.charLength.max)
        validations = validations.max(
          field.validation.charLength.max,
          field.customMessage?.charLength?.max != undefined && {
            message: field.customMessage?.charLength.max
          }
        )
    }
    if (field.validation?.regex) {
      validations = validations.regex(field.validation.regex, {
        message: field.customMessage?.regex ? field.customMessage?.regex : `${field.label} is not valid`
      })
    }

    validationsGroup[field.name] = validations
  }

  let validationArray: ZodType<any> = z.object({
    ...validationsGroup
  })

  const sameAsField = fields.filter(item => item.validation?.sameAs !== undefined)
  if (sameAsField?.length > 0) {
    for (const sameField of sameAsField) {
      validationArray = validationArray.refine(
        data => data[sameField?.name] === data[sameField?.validation?.sameAs as string],
        {
          message: sameField.customMessage?.sameAs
            ? sameField.customMessage?.sameAs
            : `${sameField?.label} don't match`,
          path: [sameField?.name]
        }
      )
    }
  }

  return validationArray
}
