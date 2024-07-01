import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import i18n from '@/lib/i18n'
import { useEffect, useState } from 'react'
import selectorLang, { TSelectorLang } from '@/lib/constans/language'
import { useRouter } from 'next/navigation'
import useWindowSize from '@/lib/hooks/useWindowSize'

const ChangeLanguage = () => {
  const router = useRouter()
  const size = useWindowSize()

  const [isTooSmall, setIsTooSmall] = useState(true)

  useEffect(() => {
    if (size?.width) {
      setIsTooSmall(size.width < 400)
    }
  }, [size])

  const [value, setValue] = useState('en')

  useEffect(() => {
    setValue(localStorage.getItem('i18nextLng') ?? 'en')
  }, [])

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang)
    setValue(lang)
    router.refresh()
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
