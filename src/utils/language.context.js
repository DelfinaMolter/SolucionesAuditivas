import { createContext, useContext, useMemo, useState } from 'react';
import translate from './language.services';

const initialState = {
  language: 'SPANISH' 
} ;

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialState.language);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key) => translate(language, key)
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default useLanguage;
