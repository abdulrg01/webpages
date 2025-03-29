import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["assets.aceternity.com", "images.unsplash.com"], // Add your domain here
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
