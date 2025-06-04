import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  images: {
    domains: ["drive.google.com", "apod.nasa.gov", "api.iauoutreach.org"],
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  distDir: "out",
};

export default nextConfig;
