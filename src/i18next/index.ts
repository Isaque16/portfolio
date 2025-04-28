import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import pt from "./locales/pt.json";
import en from "./locales/en.json";

const i18nInstance = await i18next.use(LanguageDetector).init({
  resources: {
    pt: {
      translation: pt,
    },
    en: {
      translation: en,
    },
  },
  fallbackLng: "en",
  detection: {
    order: ["navigator", "localStorage"],
    caches: ["localStorage"],
  },
  interpolation: {
    escapeValue: false,
  },
});

export default await i18nInstance;
