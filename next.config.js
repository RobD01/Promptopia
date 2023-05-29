/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

module.exports = nextConfig;

// Original config
// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;

// Image solution?
// https://github.com/vercel/next.js/blob/canary/examples/image-component/next.config.js
