import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
      allowedOrigins: ["localhost:3000", "production.com"],
    },
    serverComponentsExternalPackages: ["@prisma/client"],
  },

  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        dns: false,
        child_process: false,
        async_hooks: false,
      };
    }

    return config;
  },

  images: {
    domains: ["images.clerk.dev"],
    formats: ["image/avif", "image/webp"],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    styledComponents: true,
  },

  trailingSlash: false,

  typescript: {
    ignoreBuildErrors: false,
  },

  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },

  poweredByHeader: false,
};

export default nextConfig;
