import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  reactCompiler: true,
  images: {
    unoptimized: true, 
    // SHTO KËTË PJESË QË TË DALIN FOTOT 100%
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  allowedDevOrigins: [
    "http://192.168.56.1",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
  ],
};

export default nextConfig;