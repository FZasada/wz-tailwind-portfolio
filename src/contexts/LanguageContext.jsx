import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { LANGUAGES, DEFAULT_LANGUAGE, detectBrowserLanguage, STORAGE_KEY } from '../utils/languageConfig';

// Create context
const LanguageContext = createContext();

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(DEFAULT_LANGUAGE);
  
  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);
    if (savedLanguage && LANGUAGES[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = detectBrowserLanguage();
      setCurrentLanguage(browserLang);
    }
  }, []);

  // Save language to localStorage when changed
  const changeLanguage = (langCode) => {
    if (LANGUAGES[langCode]) {
      setCurrentLanguage(langCode);
      localStorage.setItem(STORAGE_KEY, langCode);
      // Update document language
      document.documentElement.lang = langCode;
    }
  };

  const value = useMemo(() => ({
    currentLanguage,
    changeLanguage,
    languages: LANGUAGES,
    isRTL: false // None of our languages are RTL
  }), [currentLanguage]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired
};

// Hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Hook for translations
export const useTranslation = () => {
  const { currentLanguage } = useLanguage();
  
  const t = (key, fallback = key) => {
    try {
      // Import translations dynamically
      const translations = require(`../data/translations/${currentLanguage}.json`);
      
      // Support nested keys like "navigation.home"
      const keys = key.split('.');
      let value = translations;
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          return fallback;
        }
      }
      
      return typeof value === 'string' ? value : fallback;
    } catch (error) {
      console.warn(`Translation missing for key "${key}" in language "${currentLanguage}"`);
      return fallback;
    }
  };

  return { t, currentLanguage };
};