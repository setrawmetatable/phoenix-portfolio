/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: false, // Disable Turbopack to fix framer-motion errors
  },
};

module.exports = nextConfig;
