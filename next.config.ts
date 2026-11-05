import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
const nextConfig: NextConfig = {
  
  images: {
    imageSizes: [128, 256, 384, 512],
    deviceSizes: [640, 1024, 1200],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'myanimelist.net',
        port: '',
        pathname: '/images/anime/**',
        search: '',
      },
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

const withNextIntl = createNextIntlPlugin();  
export default withNextIntl(nextConfig);
