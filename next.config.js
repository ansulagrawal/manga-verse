/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['uploads.mangadex.org'],
  },
};

module.exports = nextConfig;
