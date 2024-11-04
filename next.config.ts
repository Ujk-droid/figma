// next.config.ts
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['public.blenderkit.com','encrypted-tbn0.gstatic.com'], // Specify allowed domains here
  },
};

export default nextConfig;
