import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: false, // Keep this false for now to simplify debugging
  async rewrites() {
    return [
      {
        source: '/__/auth/:path*',
        destination: `https://proittoolsbd.firebaseapp.com/__/auth/:path*`,
      },
    ];
  },
};

export default nextConfig;