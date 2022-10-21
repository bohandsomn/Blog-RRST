/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ['en', 'uk', 'ru'],
    defaultLocale: 'en',
  }
}

module.exports = nextConfig
