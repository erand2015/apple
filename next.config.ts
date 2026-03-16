import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // KJO ËSHTË E RËNDËSISHME
  reactCompiler: true,
  images: {
    unoptimized: true, // Duhet për export statik
  },
  allowedDevOrigins: [
    "http://192.168.56.1",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
  ],
};

export default nextConfig;