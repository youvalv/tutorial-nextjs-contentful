/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  images: {
    unoptimized: true,
    domains: ['images.ctfassets.net'],
  },
};

module.exports = nextConfig;
