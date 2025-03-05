import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  images: {
    domains: ["127.0.0.1"], // Agrega el dominio aquí
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "/web-site-oao", // Lee el prefijo de una variable de entorno
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ?? "/web-site-oao",
  distDir: "out",
};

export default nextConfig;
