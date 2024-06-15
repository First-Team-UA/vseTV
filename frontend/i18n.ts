import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ukrTranslation from './locales/ukr/translations.json';
import rusTranslation from './locales/rus/translations.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: ukrTranslation,
      },
      ru: {
        translation: rusTranslation,
      },
    },
    lng: 'ukr', // Язык по умолчанию
    fallbackLng: 'ukr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;