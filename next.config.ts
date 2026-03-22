import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // এখানে 'l' (L) হবে, '1' (one) নয়
        port: '',
        pathname: '/**', // সব ধরনের ইমেজ পাথ এলাউ করার জন্য
      },
    ],
  },
};

export default nextConfig;