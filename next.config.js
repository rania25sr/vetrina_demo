/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  ...(isProd && {
    output: 'export',
    distDir: 'dist',
    basePath: '/vetrinademo',
  }),
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
