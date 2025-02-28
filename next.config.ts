import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // i18n: {
  //   locales: ['en', 'ko', 'jp'],
  //   defaultLocale: 'en',
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.myanimelist.net',
        port: '',
        pathname: '/images/anime/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
