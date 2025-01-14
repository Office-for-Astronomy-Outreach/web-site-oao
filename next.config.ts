import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en', 
    locales: ['en', 'es'],
  },
  images: {
    domains: ['static.nationalgeographic.es'], // Agrega el dominio de tus imágenes
  },
  basePath: '/web-site-oao',  // Ruta base de la página
  assetPrefix: '/web-site-oao',  // Prefijo para los activos estáticos
  distDir: 'out'
};

export default nextConfig;
