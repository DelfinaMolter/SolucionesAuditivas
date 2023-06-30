import esTranslations from '../data/espanol';
import enTranslations from '../data/english';

const translate = (language, key) => {
  if (language === 'SPANISH') {
    return esTranslations[key];
  } else if (language === 'ENGLISH') {
    return enTranslations[key];
  }
  return key;
};

export default translate;
