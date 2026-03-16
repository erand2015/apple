import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // HIQE rreshtin output: 'export'
  reactCompiler: true,
  images: {
    unoptimized: true, // E lëmë këtë që fotot të ngarkohen shpejt
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
};

export default nextConfig;