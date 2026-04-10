import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { enApplication } from '@/locales/en/application'
import { enCommon } from '@/locales/en/common'
import { enHome } from '@/locales/en/home'

void i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  defaultNS: 'common',
  ns: ['common', 'home', 'application'],
  resources: {
    en: {
      application: enApplication,
      common: enCommon,
      home: enHome,
    },
  },
  interpolation: { escapeValue: false },
})

export default i18n
