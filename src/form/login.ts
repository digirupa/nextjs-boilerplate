import i18n from '@/lib/i18n'
import { IDynamicForm } from '@/types/form'

const LoginForm: IDynamicForm[] = [
  {
    name: 'email',
    type: 'email',
    placeholder: i18n.t('input_placeholder', { name: i18n.t('email').toLowerCase() }),
    label: i18n.t('email'),
    validation: {
      required: true
    },
    customMessage: {
      email: i18n.t('validation.invalid_email'),
      required: i18n.t('validation.required_email')
    }
  },
  {
    name: 'password',
    type: 'password',
    placeholder: i18n.t('input_placeholder', { name: i18n.t('password').toLowerCase() }),
    label: i18n.t('password'),
    validation: {
      required: true
    },
    customMessage: {
      required: i18n.t('validation.required_password')
    }
  }
]

export default LoginForm
