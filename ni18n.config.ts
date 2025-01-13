import type { Ni18nOptions } from 'ni18n';

export const ni18nConfig: Ni18nOptions = {
  supportedLngs: ['en'],
  fallbackLng: 'en',
  ns: ['layout'],
  interpolation: {
    escapeValue: false, // Esto permite usar HTML
  },
  react: {
    transSupportBasicHtmlNodes: true, // Habilita soporte para etiquetas básicas
  },
};
