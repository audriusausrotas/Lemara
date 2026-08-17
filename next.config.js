/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.prismic.io", "lemara.prismic.io"],
  },
  i18n: {
    locales: ["lt", "en-gb", "no"],
    defaultLocale: "lt",
    localeDetection: false,
  },
};
