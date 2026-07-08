import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_WEATHER_API_KEY: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
  },
};

export default nextConfig;
