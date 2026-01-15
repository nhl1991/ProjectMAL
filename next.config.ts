import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  images: {
    imageSizes: [128, 256, 384, 512],
    deviceSizes: [640, 1024, 1200],
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
