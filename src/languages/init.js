import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uz from './uz.json';
import en from './en.json';
import ru from './ru.json';

i18n
  .use(initReactI18next) // подключаем React
  .init({
    resources: {
      UZ: { translation: uz },
      EN: { translation: en },
      RU: { translation: ru },
    },
    lng: 'UZ', // язык по умолчанию
    fallbackLng: 'EN', // если перевод не найден, fallback
    interpolation: {
      escapeValue: false, // React сам экранирует
    },
  });

export default i18n;
