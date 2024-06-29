import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import i18n from '@/lib/i18n'
import { getCookie, setCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import selectorLang from '@/lib/constans/language'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'

const ChangeLanguage = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [value, setValue] = useState(getCookie('lang') ?? 'en')

  const handleChangeLang = (lang: string) => {
    setCookie('lang', lang)
    setValue(lang)
    i18n.changeLanguage(lang)
    router.push(pathname)
  }
  return (
    <Select value={value} onValueChange={(value: string) => handleChangeLang(value)}>
      <SelectTrigger className='w-[163px]'>
        <SelectValue placeholder={i18n.t('select_language')} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {selectorLang.map((obj: { label: string; value: string }, index: number) => (
            <SelectItem key={index} value={obj.value}>
              {obj.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
export default ChangeLanguage
