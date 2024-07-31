import engTranslation from './locales/eng/translations.json';
import rusTranslation from './locales/rus/translations.json';
import ukrTranslation from './locales/ukr/translations.json';
import { debug } from 'console';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    eng: {
      translation: engTranslation,
    },
    rus: {
      translation: rusTranslation,
    },
    ukr: {
      translation: ukrTranslation,
    },
  },
  supportedLngs: ['eng', 'ukr', 'rus'],
  ns: ['translation'],
  defaultNS: 'translation',
  lng: 'ukr', // Язык по умолчанию
  fallbackLng: 'ukr',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
