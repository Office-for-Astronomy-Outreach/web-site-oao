import type { Ni18nOptions } from "ni18n";

export const ni18nConfig: Ni18nOptions = {
  supportedLngs: ["en"],
  fallbackLng: "en",
  ns: ["layout", "home", "about"],
  defaultNS: "layout",
  interpolation: {
    escapeValue: false, // Esto permite usar HTML
  },
  react: {
    transSupportBasicHtmlNodes: true, // Habilita soporte para etiquetas básicas
  },
  backend: {
    loadPath:
      process.env.NODE_ENV === "production"
        ? "/locales/{{lng}}/{{ns}}.json" // Ruta para producción
        : "/locales/{{lng}}/{{ns}}.json", // Ruta para desarrollo local
  },
};
