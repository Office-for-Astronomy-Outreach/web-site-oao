import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en', 
    locales: ['en', 'es'],
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', // Lee el prefijo de una variable de entorno
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  distDir: 'out'
};

export default nextConfig;
