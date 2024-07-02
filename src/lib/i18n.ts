import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import id from '@/locales/id.json'
import en from '@/locales/en.json'

i18n

  // Enables the i18next backend
  .use(Backend)

  // Enable automatic language detection
  .use(LanguageDetector)

  // Enables the hook initialization module
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'id'],
    fallbackLng: 'en',
    // lng: 'en',
    resources: {
      id: {
        translation: id
      },
      en: {
        translation: en
      }
    },
    debug: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
