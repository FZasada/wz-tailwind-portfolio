// Available languages configuration
export const LANGUAGES = {
  en: { code: 'en', name: 'English', flag: '🇺🇸' },
  de: { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  pl: { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  nl: { code: 'nl', name: 'Nederlands', flag: '🇳🇱' }
};

// Default language
export const DEFAULT_LANGUAGE = 'en';

// Detect browser language
export const detectBrowserLanguage = () => {
  const browserLang = navigator.language.substring(0, 2);
  return LANGUAGES[browserLang] ? browserLang : DEFAULT_LANGUAGE;
};

// Language storage keys
export const STORAGE_KEY = 'preferredLanguage';