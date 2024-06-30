import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import i18n from '@/lib/i18n'
import { getCookie, setCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import selectorLang, { TSelectorLang } from '@/lib/constans/language'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import useWindowSize from '@/lib/hooks/useWindowSize'

const ChangeLanguage = () => {
  const pathname = usePathname()
  const router = useRouter()
  const size = useWindowSize()

  const [isTooSmall, setIsTooSmall] = useState(true)

  useEffect(() => {
    if (size?.width) {
      setIsTooSmall(size.width < 392)
    }
  }, [size])

  const [value, setValue] = useState(getCookie('lang') ?? 'en')

  const handleChangeLang = (lang: string) => {
    setCookie('lang', lang)
    setValue(lang)
    i18n.changeLanguage(lang)
    router.push(pathname)
  }
  163
  return (
    <Select value={value} onValueChange={(value: string) => handleChangeLang(value)}>
      <SelectTrigger className={isTooSmall ? 'w-[60px]' : 'w-[163px]'}>
        <SelectValue placeholder={i18n.t('select_language')} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {selectorLang.map((obj: TSelectorLang, index: number) => (
            <SelectItem key={index} value={obj.value}>
              {isTooSmall ? obj.short : obj.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
export default ChangeLanguage
