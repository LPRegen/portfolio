/** @type {import('next').NextConfig} */
const nextConfig = {
  // TODO: implement fonts feat
  // FIX: appDir
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
